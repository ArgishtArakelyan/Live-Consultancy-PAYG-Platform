

// $(document).ready(function() {
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(window).resize(function(){
//     $('body').css('padding-bottom', $('footer').height() + 32);
// });

// $(document).on("click","",function() {
 
// }); 

$(document).on("click",".navigation-wrap .icon",function(e) {
    $(this).parent().toggleClass('open');
}); 


$('.drop-t-open').on('click', function(e) {
    $('.drop-t-open').not(this).removeClass('open');
    $(this).toggleClass('open');
    e.stopPropagation();
});
$('.dropdown-wrap').on('click', function(e) {
    e.stopPropagation();
});


$('html').click(function() {
    $('.drop-t-open').removeClass('open');
});


$('.spiritual_advisors .slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1,

    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
});
