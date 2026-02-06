import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

// API Base URL - uses relative path for Vercel, absolute for local dev
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3001/api' : '/api';

// Places App Component
window.placesApp = function() {
  return {
    allPlaces: [],        // Store all places (original data)
    places: [],           // Filtered places to display
    selectedPlace: null,
    modalOpen: false,
    currentSplide: null,
    activeFilter: 'all',  // Current active filter

    async init() {
      try {
        // Use query param format for Vercel serverless compatibility
        const response = await fetch(`${API_URL}/places?full=true`);
        this.allPlaces = await response.json();
        this.places = [...this.allPlaces]; // Copy all places to display
        console.log('✅ Places loaded:', this.places.length);
      } catch (error) {
        console.error('❌ Failed to load places:', error);
        // Fallback: try to load after a short delay (API might still be starting)
        setTimeout(() => this.init(), 2000);
      }
    },

    /**
     * Filter places by category
     * @param {string} category - The category to filter by ('all' shows all places)
     * 
     * HOW IT WORKS:
     * 1. When a filter button is clicked, this function is called with the category name
     * 2. We set activeFilter to track which button is currently active (for styling)
     * 3. If 'all' is selected, we show all places
     * 4. Otherwise, we filter places that have matching categories OR hashtags
     * 5. The filtering checks both the 'categories' array and 'hashtags' array in each place
     * 6. We use .toLowerCase() for case-insensitive matching
     */
    filterByCategory(category) {
      this.activeFilter = category;
      
      if (category === 'all') {
        // Show all places
        this.places = [...this.allPlaces];
      } else {
        // Filter places that match the category
        const searchTerm = category.toLowerCase();
        this.places = this.allPlaces.filter(place => {
          // Check if place has matching category
          const hasCategory = place.categories && 
            place.categories.some(cat => cat.toLowerCase().includes(searchTerm));
          
          // Check if place has matching hashtag
          const hasHashtag = place.hashtags && 
            place.hashtags.some(tag => tag.toLowerCase().includes(searchTerm));
          
          // Check if name or subtitle contains the search term
          const hasName = place.name.toLowerCase().includes(searchTerm) ||
            place.subtitle.toLowerCase().includes(searchTerm);
          
          return hasCategory || hasHashtag || hasName;
        });
      }
      
      console.log(`🔍 Filtered by "${category}":`, this.places.length, 'results');
    },

    async openModal(placeId) {
      // Find the place by ID from ALL places (not filtered)
      this.selectedPlace = this.allPlaces.find(p => p.id === placeId);
      this.modalOpen = true;
      document.body.classList.add('noscroll');

      // Wait for DOM to update, then initialize Splide
      await this.$nextTick();
      this.initSplide();
    },

    closeModal() {
      this.modalOpen = false;
      this.selectedPlace = null;
      document.body.classList.remove('noscroll');
      
      // Destroy Splide instance
      if (this.currentSplide) {
        this.currentSplide.destroy();
        this.currentSplide = null;
      }
    },

    initSplide() {
      if (!this.selectedPlace) return;

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const splideEl = document.querySelector(`#splide-${this.selectedPlace.id}`);
        if (splideEl && !splideEl.classList.contains('is-initialized')) {
          this.currentSplide = new Splide(splideEl, {
            type: 'slide',
            perPage: 1,
            gap: '1rem',
            pagination: true,
            arrows: true,
          }).mount();
        }
      }, 100);
    }
  };
};

// Register Alpine plugins
Alpine.plugin(collapse);

// Make Alpine globally available
window.Alpine = Alpine;

// Start Alpine
Alpine.start();