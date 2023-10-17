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
let serverLink = document.querySelector('.serverLink');
let guestInfoLink = document.querySelector('.guestInfoLink');
let guestInfoCheckLink = document.querySelector('.guestInfoCheckLink');
let nextBtn = document.querySelector('.nextBtn');
let server = document.querySelector('.server');
let guestInfo = document.querySelector('.guest-info');
let guestInfoCheck = document.querySelector('.guest-info-check');
let chooseServer = document.querySelector('.chooseServer');
let chooseServerMenu = document.querySelectorAll('.chooseServer button');
server.addEventListener('click',e=>{
    e.preventDefault();
    if(e.target.nodeName === 'BUTTON'){
    chooseServerMenu.forEach(item=>{
        console.log(item);
        item.classList.remove('active');
    })
        e.target.classList.add('active');
    }
})

let eyelashBtn = document.querySelector('.eyelashBtn');
let eyebrowBtn = document.querySelector('.eyebrowBtn');
let colorRemovalBtn = document.querySelector('.colorRemovalBtn');
nextBtn.addEventListener('click',e=>{
    e.preventDefault();
    chooseServerMenu.forEach(item=>{
       if(item.classList.contains('active')){
        server.classList.add('d-none');
        guestInfo.classList.add('d-block');
        guestInfo.classList.remove('d-none');
        serverLink.classList.remove('active');
        guestInfoLink.classList.add('active');
    }
    })
    if((eyelashBtn.classList.contains('active') == false)&& (eyebrowBtn.classList.contains('active') == false)&&(colorRemovalBtn.classList.contains('active') == false)){
        alert('請選擇一項服務項目')
    }
})
// 表單
let guestName = document.getElementById('name');
let tel = document.getElementById('tel');
let email = document.getElementById('email');
let date = document.getElementById('date');
let time = document.getElementById('time');
let confirmTerms = document.getElementById('confirmTerms');
let finishBtn = document.querySelector('.finishBtn');
let info = document.querySelector('.info');

finishBtn.addEventListener('click',e=>{
    e.preventDefault();
    if((guestName.value.trim() === '')||(tel.value.trim() === '')||(email.value.trim() === '')||(date.value === '')||(time.value === '')){
        alert('尚有資料未正確填寫')
    }else if(confirmTerms.checked == false){
        alert('請確認預約須知的內容')
    }else{
        alert('已成功預約，請至信箱確認訊息通知')
        info.innerHTML= `<li class="mb-3 d-flex align-items-center">
        <h4 class="text-secondary fs-6 me-3">預約人姓名:</h4>
        <p class="fw-bold">${guestName.value}</p>
    </li>
    <li class="mb-3 d-flex align-items-center">
        <h4 class="text-secondary fs-6 me-3">手機號碼:</h4>
        <p class="fw-bold">${tel.value}</p>
    </li>
    <li class="mb-3 d-flex align-items-center">
        <h4 class="text-secondary fs-6 me-3">電子郵件:</h4>
        <p class="fw-bold">${email.value}</p>
    </li>
    <li class="mb-3 d-flex align-items-center">
        <h4 class="text-secondary fs-6 me-3">預約日期:</h4>
        <p class="fw-bold">${date.value}</p>
    </li>
    <li class="mb-3 d-flex align-items-center">
        <h4 class="text-secondary fs-6 me-3">預約時間:</h4>
        <p class="fw-bold">${time.value}</p>
    </li>`
        server.classList.add('d-none');
        guestInfo.classList.add('d-none');
        guestInfo.classList.remove('d-block');
        guestInfoCheck.classList.add('d-block');
        guestInfoCheck.classList.remove('d-none');
        guestInfoLink.classList.remove('active');
        guestInfoCheckLink.classList.add('active');
    }
})
