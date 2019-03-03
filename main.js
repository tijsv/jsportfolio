;(function(){

    window.onload = function() {

        console.log('Starting up ...');

        let introductionModal = document.querySelector('[data-introduction]'),
            lastAnimationSegment = document.querySelector('[data-animation-end]');

        // set display of introduction animation on none after animation ends
        introductionModal.addEventListener('webkitAnimationEnd', function(e) {
            if (lastAnimationSegment !== e.target) return;
            introductionModal.style.display = "none";
        })
        introductionModal.addEventListener('animationend', function(e) {
            if (lastAnimationSegment !== e.target) return;
            introductionModal.style.display = "none";
        });

    }

})();