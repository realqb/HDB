function show_date() {
    var date = new Date();
    var y = date.getFullYear() - 2007;
    var m = 11 + date.getMonth() - 12;
    var d = date.getDate() - 13;
    var h = date.getHours();
    var t = date.getMinutes();
    var p = date.getSeconds();
    var k = date.getMilliseconds();

    document.getElementById("t").innerHTML =  "You are  [" +  y   + " years " + m + " month "+ d +" days " + h + " hours " + t + " minutes " + p + " seconds " + k + " milliseconds] " + " old :)" ;
    time=setTimeout(function(){show_date();}, 100);
}

