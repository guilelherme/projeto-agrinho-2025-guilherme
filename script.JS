document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para as âncoras da navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Adiciona classe 'active' ao item clicado (opcional)
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Animação/Alerta para o botão "Saiba Mais"
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');
    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', function() {
            alert('Prepare-se para explorar a riqueza da interação entre campo e cidade!');
            // Ou você pode rolar para uma seção específica
            // document.querySelector('#introducao').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Opcional: Adicionar uma classe 'active' ao item de navegação quando a seção estiver visível
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) { // Ajuste para quando a seção começa a aparecer
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
