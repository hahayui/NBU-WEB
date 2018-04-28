$(document).ready(function() {

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