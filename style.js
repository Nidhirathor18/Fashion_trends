const  header =document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY > 0);
    
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');

}

/*slider section */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, 
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,  // Auto-slide har 3s me hoga
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        600: { slidesPerView: 2 },  /* 600px ke baad 2 cards */
        980: { slidesPerView: 3 }   /* 980px ke baad 3 cards */
    }
});
