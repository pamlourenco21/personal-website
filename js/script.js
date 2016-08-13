/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


// Preloader
jQuery(window).load(function () {
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
});


//Mobile animation remove

(function () {
    var s = window.matchMedia('(min-width: 767px)');

    function placeIntro() {
        if (s.matches) {
            $('.timeline li').addClass('wow');
            $('.work-item').addClass('wow');
        } else {
            $('.timeline li').removeClass('wow');
            $('.work-item').removeClass('wow');
        }
    }

    placeIntro();
    window.addEventListener('resize', placeIntro)
})();









