import Alpine from 'alpinejs';

// API Base URL
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3001/api' : '/api';
const MAX_RETRIES = 3;

// Hotels Page Alpine Component
document.addEventListener('alpine:init', () => {
  Alpine.data('hotelsApp', () => ({
    allHotels: [],
    hotels: [],
    searchQuery: '',
    selectedHotel: null,
    map: null,
    markers: [],
    markersLayer: null,
    routingControl: null,
    userLatLng: null,
    routeInfo: null,
    _retryCount: 0,
    _directionsHandler: null,

    async init() {
      try {
        const response = await fetch(`${API_URL}/hotels`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        this.allHotels = await response.json();
        this.hotels = [...this.allHotels];
        this._retryCount = 0;
        console.log('✅ Hotels loaded:', this.hotels.length);

        // Wait for DOM then init map
        await this.$nextTick();
        this.initMap();
        this.getUserLocation();
      } catch (error) {
        console.error('❌ Failed to load hotels:', error);
        if (this._retryCount < MAX_RETRIES) {
          this._retryCount++;
          console.log(`🔄 Retrying (${this._retryCount}/${MAX_RETRIES})...`);
          setTimeout(() => this.init(), 2000);
        } else {
          console.error('💀 Max retries reached. Please refresh the page.');
        }
      }
    },

    initMap() {
      // Center on Philippines
      this.map = L.map('hotels-map', {
        zoomControl: true,
        scrollWheelZoom: true,
      }).setView([10.5, 123.0], 7);

      // Light-themed tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(this.map);

      // Create markers layer group
      this.markersLayer = L.layerGroup().addTo(this.map);

      // Add markers for all hotels
      this.addMarkers(this.hotels);
    },

    addMarkers(hotels) {
      // Clear existing markers
      this.markersLayer.clearLayers();
      this.markers = [];

      hotels.forEach(hotel => {
        // Custom icon
        const icon = L.divIcon({
          className: 'custom-marker',
          html: `<div class="hotel-marker-pin"><span>🏨</span></div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        const marker = L.marker([hotel.lat, hotel.lng], { icon })
          .bindPopup(this.createPopupContent(hotel))
          .on('click', () => {
            this.selectHotel(hotel);
          });

        this.markersLayer.addLayer(marker);
        this.markers.push({ hotel, marker });
      });
    },

    createPopupContent(hotel) {
      return `
        <div style="min-width: 200px;">
          <div class="map-popup-name">${hotel.name}</div>
          <div class="map-popup-location">📍 ${hotel.location}</div>
          <div class="map-popup-price">${hotel.price}</div>
          <div class="map-popup-rating">⭐ ${hotel.rating} · ${hotel.category}</div>
          <div class="map-popup-description">${hotel.description.substring(0, 100)}...</div>
          <button class="map-popup-btn" onclick="document.dispatchEvent(new CustomEvent('show-directions', {detail: ${hotel.id}}))">
            🧭 Get Directions
          </button>
        </div>
      `;
    },

    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            this.userLatLng = [pos.coords.latitude, pos.coords.longitude];
            console.log('📍 User location:', this.userLatLng);
          },
          () => {
            // Fallback: Cebu City center
            this.userLatLng = [10.3157, 123.8854];
            console.log('📍 Using default location (Cebu City)');
          }
        );
      } else {
        this.userLatLng = [10.3157, 123.8854];
      }

      // Listen for direction requests from popup (store ref for cleanup)
      this._directionsHandler = (e) => {
        const hotel = this.allHotels.find(h => h.id === e.detail);
        if (hotel) this.showDirections(hotel);
      };
      document.addEventListener('show-directions', this._directionsHandler);
    },

    searchHotels() {
      try {
        const query = (this.searchQuery || '').toLowerCase().trim();
        console.log('🔍 Searching hotels with query:', query);

        if (!query) {
          this.hotels = [...this.allHotels];
        } else {
          this.hotels = this.allHotels.filter(h => {
            if (!h) return false;

            const nameMatch = h.name && String(h.name).toLowerCase().includes(query);
            const locationMatch = h.location && String(h.location).toLowerCase().includes(query);
            const categoryMatch = h.category && String(h.category).toLowerCase().includes(query);
            const amenityMatch = Array.isArray(h.amenities) && h.amenities.some(a => 
              a && String(a).toLowerCase().includes(query)
            );

            return nameMatch || locationMatch || categoryMatch || amenityMatch;
          });
        }

        console.log(`✅ Filtered to ${this.hotels.length} results`);

        // Update map markers
        this.addMarkers(this.hotels);

        // Fit map to visible markers
        if (this.hotels.length > 0 && this.map) {
          const bounds = L.latLngBounds(this.hotels.map(h => [h.lat, h.lng]));
          this.map.fitBounds(bounds.pad(0.2));
        }
      } catch (error) {
        console.error('❌ Error in searchHotels:', error);
        // Fallback to showing all hotels if filtering fails
        this.hotels = [...this.allHotels];
      }
    },

    selectHotel(hotel) {
      this.selectedHotel = hotel;

      // Pan map to hotel
      this.map.flyTo([hotel.lat, hotel.lng], 13, { duration: 1.2 });

      // Open popup for the selected marker
      const found = this.markers.find(m => m.hotel.id === hotel.id);
      if (found) {
        found.marker.openPopup();
      }

      // Show directions
      this.showDirections(hotel);

      // Scroll card into view
      const cardEl = document.getElementById(`hotel-card-${hotel.id}`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },

    showDirections(hotel) {
      // Remove existing route
      this.clearRoute();

      if (!this.userLatLng) {
        console.warn('User location not available yet');
        return;
      }

      // Add routing
      this.routingControl = L.Routing.control({
        waypoints: [
          L.latLng(this.userLatLng[0], this.userLatLng[1]),
          L.latLng(hotel.lat, hotel.lng),
        ],
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        show: false,
        createMarker: () => null, // Don't add extra markers
        lineOptions: {
          styles: [
            {
              color: '#00d4aa',
              opacity: 0.8,
              weight: 4,
              dashArray: '10, 8',
            },
          ],
        },
      }).addTo(this.map);

      // Listen for route found
      this.routingControl.on('routesfound', (e) => {
        const route = e.routes[0];
        const distKm = (route.summary.totalDistance / 1000).toFixed(1);
        const timeMin = Math.round(route.summary.totalTime / 60);
        const hours = Math.floor(timeMin / 60);
        const mins = timeMin % 60;
        const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;

        this.routeInfo = {
          hotel: hotel.name,
          distance: `${distKm} km`,
          time: timeStr,
          price: hotel.price,
        };
      });

      this.routingControl.on('routingerror', () => {
        this.routeInfo = {
          hotel: hotel.name,
          distance: 'N/A',
          time: 'Route unavailable',
          price: hotel.price,
        };
      });
    },

    clearRoute() {
      if (this.routingControl) {
        this.map.removeControl(this.routingControl);
        this.routingControl = null;
      }
      this.routeInfo = null;
    },

    isSelected(hotelId) {
      return this.selectedHotel && this.selectedHotel.id === hotelId;
    },

    destroy() {
      // Clean up event listener
      if (this._directionsHandler) {
        document.removeEventListener('show-directions', this._directionsHandler);
      }
      // Clean up routing control
      if (this.routingControl) {
        this.map.removeControl(this.routingControl);
      }
      // Clean up map instance
      if (this.map) {
        this.map.remove();
      }
    },
  }));
});

// Make Alpine globally available
window.Alpine = Alpine;

// Start Alpine
Alpine.start();
