$(document).ready(function() {
    var srcImg;
    var btcTmp = 0.;
    var valueFinal = 0.;
    var highestPriceTMP = 0.;
    var lowestPriceTMP = 0.;
    //var btcTmpForSecondReload = 0;
    /*FUNCTION THAT SHOWS THE INFORMATION IN THE INDEX.HTML FILE ABOUT BTCS RATE*/
    function print(stoinost, imgSrc, highestPriceFTD, lowestPriceFTD) {
        $("#p p").text("1 BTC = " + valueFinal);
        $("#imgBTC").attr("src", imgSrc);
        $("#highestPriceForTheDay").text("Най-висока цена за последните 24 часа: " + highestPriceTMP)
        $("#lowestPriceForTheDay").text("Най-ниска цена за последните 24 часа: " + lowestPriceTMP)
    } /*CLOSING "print" FUNCTION */

    /*FUNCTION THAT LOADS FROM EXTERNAL JSON FILE THE INFO ABOUT THE RATE OF BTC IN BGN FOR FIRST TIME. 
        15 SECS AFTER THE "function reloadSecondURL" LOADS*/


    /*FUNCTION THAT SHOWS THE LAST RATE INFO DOR BTC ON EVERY 15 SECS*/
    function reloadSecondURL() {
        $.get('https://www.bitstamp.net/api/v2/ticker_hour/btceur/', function(data, status) {
            var fixBNB = 1.95583; /*EUR IN BGN - INFO FROM BNB*/
            console.log('Status:', status);
            console.log('data:', data);

            var btc = data.last; /*GETTING THE LAST VALUE FOR 1BTC*/
            var valueBtc = Number(btc);
            console.log(valueBtc);
            console.log(btcTmp);


            var btcTmp1 = btc; /* TRANSFERING THE VALUE OF 1BTC TO TEMPORARY VARIABLE TO MAKE COMAPRISOON BETWEEN THEM*/
            valueBtcTmp = Number(btcTmp1);

            if (btcTmp1 != btc) { /*DOING A COMAPRISON BETWEEN THE 2 VARIABLES AND TAKE THE CORRESPONDING RESULT*/
                //console.log(btcTmp);
                var btcInBGN = btcTmp1 * fixBNB;
                //console.log(btcInBGN);
            } else {
                //console.log(btc);
                var btcInBGN = btc * fixBNB;
                //console.log(btcInBGN);
            }

            if (btc < btcTmp) {
                //console.log(btc < btcTmp);
                srcImg = './images/down-arrow.png';
            } else if (btcTmp == 0) {
                srcImg = './images/minus.png';
            } else if (btc > btcTmp) {
                srcImg = './images/up-arrow.png';

            } else if (btc == btcTmp) {
                srcImg = './images/minus.png';
            }

            var highestPrice = data.high;
            highestPriceTMP = ((highestPrice) * fixBNB).toFixed(2) + " BGN ";
            var lowestPrice = data.low;
            lowestPriceTMP = ((lowestPrice) * fixBNB).toFixed(2) + " BGN ";

            valueFinal = ((btcInBGN).toFixed(2)) + " BGN ";

            print(valueFinal, srcImg, highestPriceTMP, lowestPriceTMP);

            btcTmp = btcTmp1;
            btcTmp1 = 0;
            //console.log(valueFinal);
            //print(valueFinal, srcImg);
            setTimeout(reloadSecondURL, 15000); //RELOADING ON EVERY 15 SEC THE FUNCTION WITH UPDATED DATA 
        });
    }; //CLOSING reloadSecondURL();
    //reloadSecondURL();
    //setInterval(reloadSecondURL, 15000); //RELOADING ON EVERY 15 SEC THE FUNCTION WITH UPDATED DATA 
    reloadSecondURL();

    //RESPONSIVE FIRST AND SECOND ROW
    var h = $(window).height() - 114; //+secondRow height
    $('#firstRow').css('height', h);

    //NAVBAR SCRIPT ON SCROLLING
    $("nav ul a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 120
            },
            1000,
            function() {});
    });
}); //CLOSING ON DOCUMENT READY