;(function(){

    window.onload = function() {

        // Altered JFS a bit to use a loading modal that prevents flashing content before JFS init
        let jfs = new JFS([
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
            },
            {
                name: 'open-menu',
                style: 'transform: translateY(0) !important',
            },
            {
                name: 'hide-icon',
                style: 'transform: scale(0) !important',
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

        // menu functionality
        let menuIcon = document.querySelector('[data-menu-icon]'),
            menu = document.querySelector('[data-menu]'),
            menuItems = document.querySelectorAll('[data-menu-item]'),
            menuFilter = document.querySelector('[data-menu-filter]'),
            iconBurger = document.querySelector('[data-icon-burger]'),
            iconClose = document.querySelector('[data-icon-close]');

        // has to be hidden at start
        jfs.toggleAnimation(iconClose);

        menuIcon.addEventListener('click', function() {
            jfs.toggleAnimation(menu);
            jfs.toggleAnimation(menuFilter);
            jfs.toggleAnimation(iconClose);
            jfs.toggleAnimation(iconBurger);
        });

        for(let i = 0; i < menuItems.length; i++) {
            menuItems[i].onclick = function() {
                jfs.toggleAnimation(menu);
                jfs.toggleAnimation(menuFilter);
                jfs.toggleAnimation(iconClose);
                jfs.toggleAnimation(iconBurger);
            }
        }

        // navigation text

    }

})();