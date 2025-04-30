document.addEventListener('DOMContentLoaded', function() {
    const miBoton = document.getElementById('miBoton');

    miBoton.addEventListener('click', function() {
        alert('¡Gracias por interactuar con el botón!');
        console.log('El botón ha sido clickeado.');
        // Aquí puedes agregar más funcionalidades al hacer clic en el botón
    });
});
