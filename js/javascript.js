$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.banners').owlCarousel({
        loop:true,
        items:1,
        slideBy: 1,
        dots: true,
    });
});