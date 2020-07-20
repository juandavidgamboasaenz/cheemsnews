document.querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
})


ScrollReveal().reveal('.nav-main');
ScrollReveal().reveal('.showcase',  {delay: 500} );
ScrollReveal().reveal('.cheems-cards',  {delay: 1000} );
ScrollReveal().reveal('.cards-banner-one',  {delay: 500} );
ScrollReveal().reveal('.cards-banner-two',  {delay: 500} );



