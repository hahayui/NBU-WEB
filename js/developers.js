$(document).ready(function() {
    $("#firstWithBorder").hover(onMouseOverForFirst, mouseOutFirst);
    $("#secondWithBorder").hover(onMouseOverForSecond, mouseOutSecond);
    $("#thirdWithBorder").hover(onMouseOverForThird, mouseOutThird);
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

function onMouseOverForFirst() {
    $("#firstWithBorder.border").animate({
        'border-top-right-radius': '25px',
        'border-top-left-radius': '0px',
        'border-bottom-right-radius': '25px',
        'border-bottom-left-radius': '0px'
    });
}

function onMouseOverForSecond() {
    $("#secondWithBorder.border").animate({
        'border-top-right-radius': '0px',
        'border-top-left-radius': '25px',
        'border-bottom-right-radius': '0px',
        'border-bottom-left-radius': '25px'
    });
}

function onMouseOverForThird() {
    $("#thirdWithBorder.border").animate({
        'border-top-right-radius': '25px',
        'border-top-left-radius': '0px',
        'border-bottom-right-radius': '25px',
        'border-bottom-left-radius': '0px'
    });
}

function mouseOutFirst() {
    $("#firstWithBorder.border").animate({
        'border-radius': '0px'
    });
}

function mouseOutSecond() {
    $("#secondWithBorder.border").animate({
        'border-radius': '0px'
    });
}

function mouseOutThird() {
    $("#thirdWithBorder.border").animate({
        'border-radius': '0px'
    });
}