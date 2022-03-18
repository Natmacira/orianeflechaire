window.addEventListener('DOMContentLoaded', function () {
    let orianeGalleryImages = document.querySelectorAll('.oriane-custom-gallery-container .wp-block-image img');
    let orianeGalleryNext = document.getElementById('oriane-custom-gallery-next');
    let orianeGalleryPrev = document.getElementById('oriane-custom-gallery-prev');
    let orianeGalleryClose = document.getElementById('oriane-custom-gallery-close');
    let orianeGalleryModal = document.getElementById('oriane-custom-gallery-modal');

    for (let i = 0; i < orianeGalleryImages.length; i++) {
        let orianeGalleryModalImage = document.getElementById('oriane-custom-gallery-image');
        let orianeGalleryModal = document.getElementById('oriane-custom-gallery-modal');

        orianeGalleryImages[i].classList.add( 'oriane-gallery-image' );

        orianeGalleryImages[i].addEventListener('click', function () {
            orianeGalleryModalImage.src = this.currentSrc;
            orianeGalleryModal.classList.add('active');
            document.documentElement.classList.add('oriane-custom-gallery-modal-active');
        });
    }

    orianeGalleryNext.addEventListener('click', function () {
        let orianeGalleryImages     = document.getElementsByClassName('oriane-gallery-image');
        let orianeGalleryModalImage = document.getElementById('oriane-custom-gallery-image');

        for (let i = 0; i < orianeGalleryImages.length; i++) {
            if (orianeGalleryImages[i].currentSrc === orianeGalleryModalImage.src) {
                if (orianeGalleryImages[i + 1]) {
                    orianeGalleryModalImage.src = orianeGalleryImages[i + 1].currentSrc;
                    return;
                } else {
                    orianeGalleryModalImage.src = orianeGalleryImages[0].currentSrc;
                    return;
                }
            }
        }
    });

    orianeGalleryPrev.addEventListener('click', function () {
        let orianeGalleryImages     = document.getElementsByClassName('oriane-gallery-image');
        let orianeGalleryModalImage = document.getElementById('oriane-custom-gallery-image');

        for (let i = 0; i < orianeGalleryImages.length; i++) {
            if (orianeGalleryImages[i].currentSrc === orianeGalleryModalImage.src) {
                if (orianeGalleryImages[i - 1]) {
                    orianeGalleryModalImage.src = orianeGalleryImages[i - 1].currentSrc;
                    return;
                } else {
                    orianeGalleryModalImage.src = orianeGalleryImages[orianeGalleryImages.length - 1].currentSrc;
                    return;
                }
            }
        }
    });

    function closeOrianeGalleryModal( e ) {
        let orianeGalleryModal = document.getElementById('oriane-custom-gallery-modal');
        let orianeGalleryModalImage = document.getElementById('oriane-custom-gallery-image');
        let orianeGalleryClose = document.getElementById('oriane-custom-gallery-close');

        if ( e.target === orianeGalleryModal || e.target === orianeGalleryClose ) {
            orianeGalleryModalImage.src = '';
            orianeGalleryModal.classList.remove('active');
            document.documentElement.classList.remove('oriane-custom-gallery-modal-active');
        }
    }

    orianeGalleryClose.addEventListener('click', closeOrianeGalleryModal );
    orianeGalleryModal.addEventListener('click', closeOrianeGalleryModal );
});
