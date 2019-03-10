;(function(){

    window.onload = function() {

        console.log('Starting up ...');

        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }

        new JFS([
            {
                name: 'fade-in-up',
                styleStart: 'transform: translateZ(0) translateY(20px) scale(0.7); opacity: 0;',
                styleEnd: 'transform: translateZ(0) translateY(0) scale(1); opacity: 1;'
            },
            {
                name: 'fade-in-down',
                styleStart: 'transform: translateZ(0) translateY(-20px) scale(0.7); opacity: 0; transform-origin: center top;',
                styleEnd: 'transform: translateZ(0) translateY(0) scale(1); opacity: 1;'
            },
            {
                name: 'fade-in-left',
                styleStart: 'transform: translateZ(0) translateX(20px) scale(0.9); opacity: 0; transform-origin: center right;',
                styleEnd: 'transform: translateZ(0) translateY(0) scale(1); opacity: 1;'
            },
            {
                name: 'fade-in-right',
                styleStart: 'transform: translateZ(0) translateX(-20px) scale(0.9); opacity: 0; transform-origin: center left;',
                styleEnd: 'transform: translateZ(0) translateY(0) scale(1); opacity: 1;'
            },
            {
                name: 'slide-out-left',
                styleStart: 'transform: translateZ(0) translateX(0) !important;',
                styleEnd: 'transform: translateZ(0) translateX(-100%) !important;'
            },
            {
                name: 'slide-out-right',
                styleStart: 'transform: translateZ(0) translateX(0) !important;',
                styleEnd: 'transform: translateZ(0) translateX(100%) !important;'
            },
            {
                name: 'zoom-in',
                styleStart: 'transform: translateZ(0) scale(0);',
                styleEnd: 'transform: translateZ(0) scale(1);'
            }
        ], {
            default: {
                name: "fade-in-left",
                easing: 'cubic-bezier(0.13, 0.92, 0.37, 1)',
            }
        });

        let introductionModal = document.querySelector('[data-introduction]'),
            lastAnimationSegment = document.querySelector('[data-animation-end]');

        // set display of introduction animation to none after animation ends
        introductionModal.addEventListener('transitionend', function(e) {
            if (lastAnimationSegment !== e.target) return;
            introductionModal.style.display = "none";
        });

    }

})();