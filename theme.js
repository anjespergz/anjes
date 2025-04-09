// Manejo del tema claro/oscuro
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}

// Cambiar tema al hacer clic
function setupThemeToggle() {
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.addEventListener('click', () => {
            const body = document.body;
            
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

// Transiciones entre páginas
function setupPageTransitions() {
    // Fade out al hacer clic en cualquier enlace
    document.querySelectorAll('a').forEach(link => {
        if (link.href && !link.hash && !link.classList.contains('no-transition')) {
            link.addEventListener('click', (e) => {
                if (link.target === '_blank' || link.href.startsWith('mailto:')) return;
                
                e.preventDefault();
                document.body.classList.add('fade-out');
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            });
        }
    });
    
    // Barra de progreso para El Principito
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollProgress + '%';
        });
    }
}

function setupSectionNavigation() {
    const secciones = document.querySelectorAll('.seccion');
    const links = document.querySelectorAll('.navegacion a');
    
    if (links.length > 0) {
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                
                secciones.forEach(seccion => {
                    seccion.classList.remove('activa');
                    if (seccion.id === targetId) {
                        seccion.classList.add('activa');
                    }
                });
                
                // Scroll suave al inicio de la página
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        });
    }
}


// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    setupThemeToggle();
    setupPageTransitions();
    setupSectionNavigation();
});