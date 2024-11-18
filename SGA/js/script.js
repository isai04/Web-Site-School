// Manejar el inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('login-page').classList.add('d-none');
    document.getElementById('main-page').classList.remove('d-none');
});

// Manejar la navegación de las secciones
const links = document.querySelectorAll('.nav-link-js');
const sections = document.querySelectorAll('.content-section');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        
        sections.forEach(section => section.classList.add('d-none'));
        document.getElementById(sectionId).classList.remove('d-none');
    });
});
