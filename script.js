ScrollReveal().reveal('.header',{delay: 1000});
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});
document.querySelector('.header_menu').addEventListener('click',() => {
    document.querySelector('.categories').classList.toggle('show');
});
document.querySelector('.about_btn').addEventListener('click',() => {
    
     document.querySelector('.about').classList.add('show');
     document.querySelector('.project').classList.remove('show');
     console.log("about_btn")
     
 });
 document.querySelector('.project_btn').addEventListener('click',() => {
    document.querySelector('.about').classList.remove('show');
    document.querySelector('.project').classList.add('show');
    console.log("project_btn")
});
document.querySelector('.traffic_light_title').addEventListener('click',() => {
    document.querySelector('.traffic_light_description').classList.toggle('show');
    document.querySelector('.traffic_light_photo').classList.toggle('show');
    console.log("traffic_light_btn")
});
document.querySelector('.temperature_arduino_title').addEventListener('click',() => {
    document.querySelector('.temperature_arduino_description').classList.toggle('show');
    document.querySelector('.temperature_arduino_photo').classList.toggle('show');
    console.log("temperature_arduino_btn")
});
document.querySelector('.window_bt_title').addEventListener('click',() => {
    document.querySelector('.window_bt_description').classList.toggle('show');
    document.querySelector('.window_bt_photo').classList.toggle('show');
    console.log("window_bt_btn")
});
