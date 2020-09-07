// Obejeto con las propiedades del scroll
let ps = {
    posicionScroll: 0,
    ultimasPropiedades: document.querySelector('.container'),
    textoFondoHeader: document.querySelector('.texto-fondo-header'),
    propiedadesVenta: document.querySelector('.ultimas-propiedades'),
    propiedadAlquiler1: document.querySelector('#complejo-1'),
    propiedadAlquiler2: document.querySelector('#complejo-2'),
    sectionConfianza: document.querySelector('.confiar'),
    cajaValores: document.querySelector('.valores'),
    menuMovil: document.querySelector('.menu-movil'),
    navMenu: document.querySelector('header .barra nav'),
    barra: document.querySelector('header .barra'),
    header: document.querySelector('header'),
    logo: document.querySelector('header .barra .logo h2'),
    botonera: document.querySelectorAll('header .barra nav a'),
    botonUp: document.querySelector('span.flecha'),
    intervalo: null,
    mostrarNav: false
}

// Objeto con los métodos del scroll

let ms = {
    inicioScroll: () => {
        document.addEventListener('scroll', ms.animacionScroll);
        ps.menuMovil.addEventListener('click', ms.mostrarMenu);
        ps.botonUp.addEventListener('click', ms.volverArriba);
        ps.botonUp.addEventListener('click', ms.volverArriba);
        for (let i = 0; i < ps.botonera.length; i++) {
            ps.botonera[i].addEventListener('click', ms.mostrarMenu);
        }
    },
    animacionScroll: () => {
        ps.posicionScroll = window.pageYOffset;

        if (ps.posicionScroll > ps.header.offsetTop + 150) {
            ps.barra.style.position = 'fixed';
            ps.barra.style.backgroundColor = 'rgba(21, 46, 78, .9)';
            ps.barra.style.zIndex = '20';
            ps.barra.style.padding = '.7rem';
            ps.barra.style.width = '100%';
            ps.logo.style.transition = 'all .1s';
            ps.logo.style.fontSize = '1.9rem';
            ps.logo.style.color = 'rgba(255, 255, 255, 1)';
            ps.menuMovil.childNodes[0].style.color = 'rgba(255, 255, 255, 1)';
            for (let i = 0; i < ps.botonera.length; i++) {
                ps.botonera[i].style.color = 'rgba(255, 255, 255, 1)';
            }

        } else {
            ps.barra.style.backgroundColor = 'rgba(255, 255, 255, .7)';
            ps.logo.style.color = 'rgb(21, 46, 78)';
            ps.barra.style.position = 'static';
            ps.barra.style.padding = '1.6rem';
            ps.logo.style.fontSize = '2.7rem';
            ps.logo.style.transition = 'all .7s';
            ps.menuMovil.childNodes[0].style.color = 'rgb(21, 46, 78)';
            for (let i = 0; i < ps.botonera.length; i++) {
                ps.botonera[i].style.color = 'rgb(21, 46, 78)';
            }
        }

        //              AIMACIÓN PARA EL BOTON

        if (ps.posicionScroll > 343) {
            ps.botonUp.style.opacity = '1';
            ps.botonUp.style.transition = 'all 1s';
            ps.botonUp.style.zIndex = 100;
        } else {
            ps.botonUp.style.opacity = '0';
        }

        if (window.matchMedia('(min-width:992px)').matches) {
            if (ps.posicionScroll > ps.textoFondoHeader.offsetHeight) {
                ps.textoFondoHeader.style.maxHeight = '0';
                ps.textoFondoHeader.style.opacity = '0';
                ps.textoFondoHeader.style.transition = 'all 2s';
                ps.ultimasPropiedades.style.marginTop = '34rem';
            } else {
                ps.textoFondoHeader.style.maxHeight = '600px';
                ps.textoFondoHeader.style.opacity = '1';
                ps.textoFondoHeader.style.transition = 'all 1s';
                ps.ultimasPropiedades.style.marginTop = '7rem';
            }
        }

        if (ps.posicionScroll > ps.propiedadAlquiler1.offsetTop - 340) {
            ps.propiedadAlquiler1.style.opacity = 1;
            ps.propiedadAlquiler1.style.transition = 'all 1s';

        } else {
            ps.propiedadAlquiler1.style.opacity = 0;
        }

        if (ps.posicionScroll > ps.propiedadAlquiler1.offsetTop + 100) {
            ps.propiedadAlquiler2.style.opacity = '1';
            ps.propiedadAlquiler2.style.transition = 'all 2s';
        } else {
            ps.propiedadAlquiler2.style.opacity = '0';
        }

        if (ps.posicionScroll > ps.propiedadAlquiler2.offsetTop + 277) {
            ps.cajaValores.style.opacity = 1;
            ps.cajaValores.style.transition = 'all 1s';
        } else {
            ps.cajaValores.style.opacity = 0;
        }
    },
    mostrarMenu: () => {
        if (!ps.mostrarNav) {
            ps.navMenu.style.opacity = '1';
            ps.navMenu.style.zIndex = '2';
            ps.navMenu.style.maxHeight = '70rem';
            ps.barra.style.maxHeight = '700rem';
            ps.navMenu.style.marginTop = '2rem';
            ps.navMenu.style.transition = 'all 1s';
            ps.navMenu.style.flexDirection = 'column';
            ps.mostrarNav = true;
        } else {
            // ps.navMenu.style.display = 'none';
            ps.navMenu.style.zIndex = '-1';
            ps.navMenu.style.opacity = '0';
            ps.navMenu.style.maxHeight = '0';
            ps.barra.style.maxHeight = '18.5rem';
            ps.barra.style.transition = 'all 1s';
            ps.navMenu.style.transition = 'all 1s';
            ps.mostrarNav = false;
        }
    },
    volverArriba: function() {

        ps.intervalo = setInterval(function() {

            ps.posicionScroll -= 300;
            if (ps.posicionScroll <= ps.header.offsetTop) {
                clearInterval(ps.intervalo);
            }
            window.scrollTo(0, ps.posicionScroll);
        }, 77)
    }

}
ms.inicioScroll();