document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Filtro de Portfólio (exemplo básico)
    const filterButtons = document.querySelectorAll('.filter-buttons button');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            // Aqui você adicionaria a lógica real para filtrar os itens do portfólio
            console.log('Filtrando por:', filterValue);
        });
    });

    // 2. Efeito de Navbar Fixo/Scroll
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.hero');
    const headerHeight = header.offsetHeight; // Altura da seção hero

    // Adiciona uma classe à navbar quando o usuário rolar além da seção hero
    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Adicione no CSS para ver o efeito:
    /*
    .navbar.scrolled {
        position: fixed;
        top: 0;
        background-color: #222;
        color: #fff;
        padding: 15px 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .navbar.scrolled ul li a {
        color: #fff;
    }
    .navbar.scrolled .logo {
        border-color: #fff;
    }
    */
});