$('.owl-carousel_1').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    dots:true,
    nav: false,
    autoplayTimeout: 8500,
    smartSpeed:1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 3
        }
    }
});

$('.owl-carousel_2').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    dots: false,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed:1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 3
        }
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
