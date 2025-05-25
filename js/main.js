
// Menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Formulario de tracking
    const trackingForm = document.getElementById('tracking-form');
    if (trackingForm) {
        trackingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const trackingNumber = document.getElementById('tracking-number').value;

            // Aquí se simularía la búsqueda del tracking
            document.getElementById('tracking-result').innerHTML = `
                <h3>Resultado de tracking para: ${trackingNumber}</h3>
                <p>Estado: En tránsito</p>
                <p>Última actualización: ${new Date().toLocaleDateString()}</p>
                <p>Ubicación actual: Centro de distribución</p>
            `;
        });
    }

    // Formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulario enviado con éxito. Nos pondremos en contacto contigo pronto.');
            registerForm.reset();
        });
    }
});
