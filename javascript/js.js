$(document).ready(function () {
    // 按鈕特效
    $('.navbar .nav-link,.navbar-toggler,header .btn,.header-icon a img,footer .info li,footer .socialMedia li,.btn-up,.login .btn,.login a').hover(function () {
            $(this).toggleClass('animate__animated  animate__pulse');
        });
    $('.navbar-brand').hover(function () {
        $(this).toggleClass('animate__animated animate__headShake');
    });  

    // GoToTop按鈕
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

    // Q&A選單內容切換
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

    // 預約切換
    $('#server').click(function () {
        // over
        $('.server').removeClass('d-none');
        $('.server').addClass('d-block');
        $('.server').siblings().removeClass('d-block');
        $('.server').siblings().addClass('d-none');
    });
    $('#guest-info').click(function () {
        // over
        $('.guest-info').removeClass('d-none');
        $('.guest-info').addClass('d-block');
        $('.guest-info').siblings().removeClass('d-block');
        $('.guest-info').siblings().addClass('d-none');
    });
    $('#guest-info-check').click(function () {
        // over
        $('.guest-info-check').removeClass('d-none');
        $('.guest-info-check').addClass('d-block');
        $('.guest-info-check').siblings().removeClass('d-block');
        $('.guest-info-check').siblings().addClass('d-none');
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

//  Q&A NavTab選單切換
let navTabs = document.querySelector('.nav-tabs')
let navTabsItem = document.querySelectorAll('.nav-tabs li');
navTabs.addEventListener('click',e=>{
    e.preventDefault();
    console.log(e.target);
    navTabsItem.forEach(item=>{
        item.children[0].classList.remove('active');
    })
    e.target.classList.add('active');
})
