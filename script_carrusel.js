document.addEventListener('DOMContentLoaded', () => {
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const carruselTrack = document.querySelector('.carrusel-track');
    const anteriorBoton = document.querySelector('.anterior');
    const siguienteBoton = document.querySelector('.siguiente');
    const puntos = document.querySelectorAll('.punto');

    const imagenes = document.querySelectorAll('.carrusel-track img');
    const numeroDeImagenes = imagenes.length;
    let indiceActual = 0;

    const moverCarrusel = () => {
        const porcentajeDesplazamiento = -indiceActual * 100;
        carruselTrack.style.transform = `translateX(${porcentajeDesplazamiento}%)`;
        actualizarPuntos();
    };

    const actualizarPuntos = () => {
        puntos.forEach((punto, indice) => {
            punto.classList.toggle('activo', indice === indiceActual);
        });
    };

    anteriorBoton.addEventListener('click', () => {
        if (indiceActual > 0) {
            indiceActual--;
            moverCarrusel();
        }
    });

    siguienteBoton.addEventListener('click', () => {
        if (indiceActual < numeroDeImagenes - 1) {
            indiceActual++;
            moverCarrusel();
        }
    });

    puntos.forEach((punto, indice) => {
        punto.addEventListener('click', () => {
            indiceActual = indice;
            moverCarrusel();
        });
    });

    // Autoplay (opcional)
    let autoplayInterval = setInterval(() => {
        indiceActual = (indiceActual + 1) % numeroDeImagenes;
        moverCarrusel();
    }, 3000); // Cambia de imagen cada 3 segundos

    // Detener el autoplay al pasar el ratón por encima
    carruselContenedor.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    // Reanudar el autoplay al quitar el ratón
    carruselContenedor.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            indiceActual = (indiceActual + 1) % numeroDeImagenes;
            moverCarrusel();
        }, 3000);
    });

    // Inicializar el carrusel
    moverCarrusel();
});
