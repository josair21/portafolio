document.querySelector('.menu').addEventListener('click',() => {
    document.querySelector('.categories').classList.toggle('show');
});
document.querySelector('.about_btn').addEventListener('click',() => {
     document.querySelector('.showcase').classList.add('show');
     document.querySelector('.project').classList.remove('show');
     console.log("about")
 });
 document.querySelector('.project_btn').addEventListener('click',() => {
    document.querySelector('.showcase').classList.remove('show');
    document.querySelector('.project').classList.add('show');
    console.log("about")
});
ScrollReveal().reveal('.container',{delay: 1000});
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});