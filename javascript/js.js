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
});