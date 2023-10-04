$(document).ready(function () {
    $('.navbar .nav-link,.navbar-toggler,header .btn,.header-icon a img,.serviceItems .btn,.reserved a,.reserve button,.footer .info li,.footer .socialMedia li,.btn-up,.login .btn,.login a').hover(function () {
            $(this).toggleClass('animate__animated  animate__pulse');
        });
    $('.navbar-brand').hover(function () {
        $(this).toggleClass('animate__animated animate__headShake');
    });  
    $('.question button').hover(function () {
        $(this).toggleClass('accordion-item-hover');
    }); 
    $('.reserved .link-secondary,.login .link-secondary').hover(function () {
        $(this).toggleClass('link-hover-decoration');
    });
    // 上拉按鈕
    $("a[href$='.zip']").addClass('fa-solid fa-circle-chevron-up text-brown fs-1') ;

    $('.btn-up').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0},100);
    });

    $('.btn-up').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.btn-up').fadeIn();
        }
        else{
            $('.btn-up').fadeOut();
        }
    });
    $('.circle-link').hover(function () {
            // over
            $('.circle-item').addClass('is-active');
        }, function () {
            // out
            $('.circle-item').removeClass('is-active');
        }
    );

    // Q&A選單
    $('.accordionEyelash').click(function () {
            // over
            $('#accordionEyelash').removeClass('d-none');
            $('#accordionEyelash').addClass('d-block');
            $('#accordionEyelash').siblings().removeClass('d-block');
            $('#accordionEyelash').siblings().addClass('d-none');
    });
    $('.accordionEyebrow').click(function () {
        // over
        $('#accordionEyebrow').removeClass('d-none');
        $('#accordionEyebrow').addClass('d-block');
        $('#accordionEyebrow').siblings().removeClass('d-block');
        $('#accordionEyebrow').siblings().addClass('d-none');
    });
    $('.accordionColorRemoval').click(function () {
        // over
        $('#accordionColorRemoval').removeClass('d-none');
        $('#accordionColorRemoval').addClass('d-block');
        $('#accordionColorRemoval').siblings().removeClass('d-block');
        $('#accordionColorRemoval').siblings().addClass('d-none');
    });
});

AOS.init();
var portfolioSwiper = new Swiper(".portfolioSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
    cssMode:true,
    mousewheel: {
        invert: true,
    }   ,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 30
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        991: {
        slidesPerView: 3,
        spaceBetween: 20
        },
    }
});
var indexSwiper = new Swiper(".indexSwiper", {
    effect: "cards",
    grabCursor: true,
  });

let navTabs = document.querySelector('.nav-tabs')
let navTabsItem = document.querySelectorAll('.nav-tabs li');
// console.log(navTabs);
// console.log(navTabsItem);
navTabs.addEventListener('click',e=>{
    console.log(e.target);
    navTabsItem.forEach(item=>{
        item.children[0].classList.remove('active');
    })
    // console.log(navTabs);
    e.target.classList.add('active');
    // console.log(navTabs);
})