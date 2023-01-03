$(function () {
    $('.service-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        centerMode: true,
        centerPadding: '0',
        speed: 1500,
        prevArrow: '<i class="fa-solid fa-arrow-up arrow-up"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-down arrow-down"></i>',
    });
    $('.review-users').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        centerPadding: 0,
        centerMode: true,
        prevArrow: '<i class="fa-solid fa-arrow-up review-arrow-up"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-down review-arrow-down"></i>',
        asNavFor: '.review-desc',
        speed: 1000,
    });
    $('.review-desc').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.review-users',
        prevArrow: false,
        nextArrow: false,
        fade: true,
        speed: 1000
    });
})