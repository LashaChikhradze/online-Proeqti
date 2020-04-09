window.onscroll = function() {scrollFunction()};
let navbarBrandOnscroll = document.querySelector(".navbar-brand-onscroll")
let navbarBrand = document.querySelector(".navbar-brand")
let headerNavbar = document.querySelector(".header-navbar")

function scrollFunction() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
        navbarBrandOnscroll.style.display = "block";
        navbarBrand.style.display = "none";
        headerNavbar.classList.add("fixed-navbar")
        headerNavbar.classList.remove("header-navbar-background")
    }else{
        navbarBrandOnscroll.style.display = "none";
        navbarBrand.style.display = "block";
        headerNavbar.classList.remove("fixed-navbar")
        headerNavbar.classList.add("header-navbar-background")
    }
 
}
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownToggle = document.querySelector(".dropdown-toggle");
for(let i = 0; i < dropdownToggle.length; i++){
    dropdownToggle[i].addEventListener("click", function(){
        alert("s")
        dropdownMenu[i].classlist.add("show");
    })
    dropdownToggle[i].addEventListener("mouseout", function(){
        dropdownMenu[i].classlist.remove("show");
    })
}
let sidemenu_btn = document.querySelector(".sidemenu_btn");
let sidenav = document.querySelector(".sidenav");
let close_side_menu = document.querySelector("#close_side_menu");
let hide_sidenav = document.querySelector(".hide-sidenav");

sidemenu_btn.addEventListener("click", function(){
    sidenav.classList.remove("display-none");
    sidenav.classList.add("show-side-nav");
    sidenav.classList.remove("hide-side-nav");
    close_side_menu.style.display = "block";
})
close_side_menu.addEventListener("click", function(){
    sidenav.classList.add("hide-side-nav");
    sidenav.classList.remove("show-side-nav");
    this.style.display = "none";
})
hide_sidenav.addEventListener("click", function(){
    sidenav.classList.remove("show-side-nav");
    sidenav.classList.add("hide-side-nav");
    close_side_menu.style.display = "none";
})
$(document).ready(function(){
    new WOW().init();
    let heroSlider = $('.papa-carousel .owl-carousel')
    heroSlider.owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed:450,
        autoplayTimeout: 5000,
        dots: true,
        dotsData: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $(".service .owl-carousel").owlCarousel({
        loop:true,
        center: true,
        margin:0,
        autoplay: false,
        autoplayTimeout: 5000,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        responsive:{
            0:{
                items:1,
                autoplay: true,
            },
            800:{
                items:3,
                autoplay: false,

            },
            1000:{
                items:3,
                autoplay: false,

            }
        }
    })
    $('.counters').counterUp({
        delay: 10,
        time: 1000
    });
})
let appSliderLockBtn = document.querySelector('.app-slider-lock-btn');
let appSliderLockImg = document.querySelector('.app-slider-lock img');
let  = document.querySelector('.iphone-slide img');
appSliderLockBtn.addEventListener('click', function(){
    if(appSliderLockImg.style.opacity = "1"){
        appSliderLockImg.style.opacity = "0"
        iphoneSlideImg.style.opacity = "1"
    } else{
        appSliderLockImg.style.opacity = "1"
        iphoneSlideImg.style.opacity = "0"
    }
})
// jQuery(document).ready(function( $ ){
//     $('.counter').counterUp({
//         delay: 10,
//         time: 1000,
//     });
// })