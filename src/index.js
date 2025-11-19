import Alpine from 'alpinejs'

 


window.Alpine = Alpine
 
Alpine.start();

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        breakpoints: {
            640: {
                perPage: 1,
            },
            768: {
                perPage: 2,
            },
        }
    } );
    splide.mount();
  } );