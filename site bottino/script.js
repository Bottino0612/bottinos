document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    // Toggle do menu hambúrguer
    mobileMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link (para mobile)
    document.querySelectorAll('.main-nav a').forEach(item => {
        item.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Função para adicionar classe 'scrolled' ao cabeçalho (opcional)
    // Para um efeito de cabeçalho que muda ao rolar, como no Sale Brasa
    // window.addEventListener('scroll', () => {
    //     const header = document.querySelector('.main-header');
    //     if (window.scrollY > 50) { // Se rolar mais de 50px
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // });
});