document.querySelector('.nav-main').addEventListener('click',() => {
    document.querySelector('.categories').classList.toggle('show');
});
ScrollReveal().reveal('.container',{delay: 1000});
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});