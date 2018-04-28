$(document).ready(function() {

    showContent();

    //NAVBAR SCRIPT ON SCROLLING
    $("nav ul a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 85
            },
            1000,
            function() {});
    });
}); //CLOSING ON DOCUMENT READY

function showContent() {
    $(".firstRow")
        .hide()
        .fadeIn(1400, "linear");
    $(".secondRow")
        .hide()
        .fadeIn(2400, "linear");
    $(".thirdRow")
        .hide()
        .fadeIn(3400, "linear");
    $("footer")
        .hide()
        .show(4400);
}