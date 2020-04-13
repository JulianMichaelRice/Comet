$(document).on("scroll", function () { //Using the scroll global variable
    pageTop = $(document).scrollTop();
    var fades =  $(".bgn"); //Calling the class in HTML
    var windowBottom  = pageTop + $(window).height();
    for (var i = 0; i < fades.length; i++) {
        var now = fades[i];
        if ($(now).position().top < windowBottom) {
            $(now).addClass("fadefade");
        }
        else {
            $(now).removeClass("fadefade");
        }
    }
});