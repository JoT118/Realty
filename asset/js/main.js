// Header menu - scroll-desktop
var header = document.querySelector('#header');
var getHeightHeader = header.clientHeight;
var getNav = document.getElementsByClassName('nav-item');
var getNavLength = getNav.length;
var getSearch = document.querySelector('.header-search a');
var getSearchIcon = document.querySelector('.search-icon');
var getSearchText = document.querySelector('.search-text');
var menuDesktop = window.matchMedia("(min-width: 991px)");

window.addEventListener('scroll',function(){
    if(window.pageYOffset>90  && menuDesktop.matches){
        header.classList.add('header-scroll');
        for(var i=0;i<getNavLength;i++){
            getNav[i].classList.add('color-scroll-black');
            getNav[i].classList.add('nav-item:hover');
        }
        getSearch.classList.add('search-scroll');
        getSearchIcon.classList.add('color-scroll-white');
        getSearchText.classList.add('color-scroll-white');
    }
    else{
        header.classList.remove('header-scroll');
        for(var i=0;i<getNavLength;i++){
            getNav[i].classList.remove('color-scroll-black');
        }
        getSearch.classList.remove('search-scroll');
        getSearchIcon.classList.remove('color-scroll-white');
        getSearchText.classList.remove('color-scroll-white');
    }
})
// slide-banner

var slideIndex = 1;
var bgSlide = document.getElementById('banner-bg');
var change = function slideBackground(){
    var newArrayBG = ["url('Realty/asset/imges/background/home.jpg')","url('/asset/imges/background/banner1.jpg')","url('/asset/imges/background/banner2.jpg')"];
    bgSlide.style.backgroundImage = newArrayBG[slideIndex];
    slideIndex++;
    if(slideIndex>newArrayBG.length-1){
        slideIndex = 0;
    }
    
}
setInterval(change,4000);

// type slide

$(document).ready(function() {
    $('.type-post-list').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="slick-prev"><i class="ti-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="ti-angle-right" aria-hidden="true"></i></div>',
        responsive:[
            {
                breakpoint:1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Menu
var typeH = document.querySelector(".type-heart");
typeH.onclick = () => {
    typeH.classList.toggle('type-heart-red');
}
var menuIcon = document.querySelector(".menu-icon-header");
var navList = document.querySelector(".nav-list");
menuIcon.onclick = ()=>{
    navList.classList.toggle('dp-block');
}


// search box

var itemChoice = document.querySelector(".search-item-advanced");
var choiceList = document.querySelector(".search-box-item-choise");
itemChoice.onclick = ()=>{
    choiceList.classList.toggle('dp-block');
}
// slide-new
$(document).ready(function() {
    $('.new-container').slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="slick-prev"><i class="ti-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="ti-angle-right" aria-hidden="true"></i></div>',
        responsive:[
            {
                breakpoint:1200,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint:1000,
                settings: {
                    arrows:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// project slide
$(document).ready(function() {
    $('.project-items-list').slick({
        centerMode: true,
        dots:true,
        infinite: true,
        speed: 500,
        centerPadding:'5rem',
        slidesToShow:3,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="slick-prev"><i class="ti-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="ti-angle-right" aria-hidden="true"></i></div>',
        responsive: [
            {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding:'3rem',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding:'2rem',
                slidesToShow: 1
            }
            }
        ]
    });
});    

// about slide

$(document).ready(function() {
    $('.about-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});  


