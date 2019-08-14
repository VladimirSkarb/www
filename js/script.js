$( function() {
    navOpener()
    $( "#services-tabs" ).tabs();
} );

$( function() {
    $( "#portfolio-tabs" ).tabs();
    $('.quote-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        dots: true
        // fade: true
    });
} );

function navOpener() {
    $('.nav-opener').on('click', function(){
        if($('body').hasClass('active')){
            $('body').removeClass('active');
        }else {
            $('body').addClass('active');
        }
    });
}