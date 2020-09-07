// Objeto con las propiedades del scroll
let psi = {
    menuMovil: document.querySelector('.menu-movil'),
    barra: document.querySelector('header .barra'),
    botonUp: document.querySelector('span.flecha'),
    navMenu: document.querySelector('header .barra nav'),
    botonera: document.querySelectorAll('header .barra nav a')
}



// Objeto con los métodos del scroll

let msi = {
    inicioScroll: () => {
        document.addEventListener('scroll', msi.animacionScroll);
        psi.menuMovil.addEventListener('click', msi.mostrarMenu);
        psi.botonUp.addEventListener('click', msi.volverArriba);
        for (let i = 0; i < psi.botonera.length; i++) {
            psi.botonera[i].addEventListener('click', msi.mostrarMenu);
        }
    },
    animacionScroll: () => {
        psi.posicionScroll = window.pageYOffset;

        if (psi.posicionScroll > 343) {
            psi.botonUp.style.opacity = '1';
            psi.botonUp.style.transition = 'all 1s';
            psi.botonUp.style.zIndex = 100;
        } else {
            psi.botonUp.style.opacity = '0';
        }

    },
    mostrarMenu: () => {
        if (!psi.mostrarNav) {
            psi.navMenu.style.opacity = '1';
            psi.navMenu.style.zIndex = '1';
            psi.navMenu.style.maxHeight = '70rem';
            psi.barra.style.maxHeight = '700rem';
            psi.navMenu.style.marginTop = '2rem';
            psi.navMenu.style.transition = 'all 1s';
            psi.navMenu.style.flexDirection = 'column';
            psi.mostrarNav = true;
        } else {
            psi.navMenu.style.zIndex = '-1';
            psi.navMenu.style.opacity = '0';
            psi.navMenu.style.maxHeight = '0';
            psi.barra.style.maxHeight = '18.5rem';
            psi.barra.style.transition = 'all 1s';
            psi.navMenu.style.transition = 'all 1s';
            psi.mostrarNav = false;
        }
    },
    volverArriba: function() {

        psi.intervalo = setInterval(function() {

            psi.posicionScroll -= 300;
            if (psi.posicionScroll <= psi.barra.offsetTop) {
                clearInterval(psi.intervalo);
            }
            window.scrollTo(0, psi.posicionScroll);
        }, 77)
    }
}
msi.inicioScroll();