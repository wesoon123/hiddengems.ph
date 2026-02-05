import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

// API Base URL - uses relative path for Vercel, absolute for local dev
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3001/api' : '/api';

// Places App Component
window.placesApp = function() {
  return {
    places: [],
    selectedPlace: null,
    modalOpen: false,
    currentSplide: null,

    async init() {
      try {
        // Use query param format for Vercel serverless compatibility
        const response = await fetch(`${API_URL}/places?full=true`);
        this.places = await response.json();
        console.log('✅ Places loaded:', this.places.length);
      } catch (error) {
        console.error('❌ Failed to load places:', error);
        // Fallback: try to load after a short delay (API might still be starting)
        setTimeout(() => this.init(), 2000);
      }
    },

    async openModal(placeId) {
      // Find the place by ID
      this.selectedPlace = this.places.find(p => p.id === placeId);
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