document.addEventListener('DOMContentLoaded', function() {
    const contenedoresDeImagenes = document.querySelectorAll('.imagen-contenedor');

    contenedoresDeImagenes.forEach(contenedor => {
        contenedor.addEventListener('click', function() {
            const imagen = this.querySelector('img');
            const rutaImagen = imagen.getAttribute('src');
            const textoAlternativo = imagen.getAttribute('alt');

            // Puedes personalizar la acción al hacer clic en la imagen
            alert(`Clic en la imagen: ${textoAlternativo}\nRuta: ${rutaImagen}`);
            console.log(`Clic en la imagen: ${textoAlternativo}, Ruta: ${rutaImagen}`);

            // O podrías abrir la imagen en una ventana modal o realizar otra acción
        });
    });
});
