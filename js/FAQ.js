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

    loadData();

}); //CLOSING ON DOCUMENT READY

var section1 = document.querySelector('#questionSection');
var questionSection = document.querySelector("#question");

function loadData() {

    $.get('https://api.myjson.com/bins/78qkf', function(data, status) {
        console.log('Status:', status);
        console.log('data:', data);
        var questions = data.question; /*GETTING THE QUESTION*/
        var qANDa = data["questionsANDanswers"];
        //console.log("[1] = ", qANDa[1]);
        //console.log("ID = ", qANDa[1].id);
        for (i = 0; i < qANDa.length; i++) {
            var buttons = document.createElement('button');
            buttons.value = qANDa[i].id;
            //console.log("buttons value = ", buttons.value);
            //document.getElementsByTagName('button')[i].setAttribute("class", "btn btn-outline-success mt-2 col-12");
            buttons.textContent = qANDa[i].question;
            section1.appendChild(buttons);
        }
        $('#questionSection button').attr('class', 'btn btn-outline-success ml-2 mr-2 mt-2');
        var IDOfQuestion = 0;
        //http://api.jquery.com/val/
        $('button').click(function() {
            IDOfQuestion = $(this).val();
            $("#answerSectionBG").css("background-color", getRandomColor());
            $("#questionMark").css("color", getContrast(getRandomColor()));
            $("#question h1")
                .hide()
                .fadeIn(400, "linear")
                .text("Въпрос: " + qANDa[IDOfQuestion].question);

            $("#answer p")
                .hide()
                .fadeIn(400, "linear")
                .text("Отговор: " + qANDa[IDOfQuestion].answer);
            //console.log("ID = ", IDOfQuestion);
            //console.log("Question = ", qANDa[IDOfQuestion].question);
        });
    });
}; /*CLOSING "loadData" FUNCTION*/

/* BACKGROUND COLOR */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/* CONTRAST COLOR FOR THE QUESTION MARK */
function getContrast(bgColor) {
    if (!bgColor) { return ''; }
    var contrast = (parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2) ? '#000000' : '#ffffff';
    //console.log(contrast);
    return contrast;
}