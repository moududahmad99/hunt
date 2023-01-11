$(function () {
    $('#banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: '<i class="fa-solid fa-angle-left slick-arrow1"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right slick-arrow2"></i>'
    });
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
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
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
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.brand').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 2
                }
            }
        ]
    });
})