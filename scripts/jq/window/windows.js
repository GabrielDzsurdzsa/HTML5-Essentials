$(window).resize(function () {

    /*Fade navigation back in after window.resize and fadeToggle call on mobile menu*/
    if ($(window).width() >= 1024) { $("nav").fadeIn(); }
    if ($(window).width() <= 1024) { $("nav").fadeOut(); }

});