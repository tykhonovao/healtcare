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
        1170: {
            items: 3
        }
    }
});

var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
    box.classList.toggle('active');
});
