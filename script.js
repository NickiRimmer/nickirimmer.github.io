$(document).ready(function () {

    $(".slider").slick({
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll: 1,
        slidesToShow: 3
    });
});