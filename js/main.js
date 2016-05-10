var colors = [
    "#2942B5", //-10
    "#383FA5", //-5
    "#483C95", //0
    "#573984", //5
    "#6A3570", //10
    "#753365", //15
    "#853054", //20
    "#912E48", //25
    "#9F2B39"] //30

function getWeather() {
    var city = $("#city").val();
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=afc104e40f8c7d7a65ce1795307d86f8&units=metric",
        success: function(weather){
            $("#weather").html(Math.floor(weather.main.temp) + "&deg;C");
            $("#cityTitle").html(weather.name + ", " + weather.sys.country);
            var BC = "";
            if (weather.main.temp < -10) {
                BC = colors[0];
            }
            else if (weather.main.temp < -5) {
                BC = colors[1];
            }
            else if (weather.main.temp < 0) {
                BC = colors[2];
            }
            else if (weather.main.temp < 5) {
                BC = colors[3];
            }
            else if (weather.main.temp < 10) {
                BC = colors[4];
            }
            else if (weather.main.temp < 15) {
                BC = colors[5];
            }
            else if (weather.main.temp < 20) {
                BC = colors[6];
            }
            else if (weather.main.temp < 25) {
                BC = colors[7];
            }
            else {
                BC = colors[8];
            }
            $("body").animate({
                backgroundColor: BC
            }, 1500)
        }
    })
};

function getIcon() {
    var city = $("#city").val();
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=afc104e40f8c7d7a65ce1795307d86f8&units=metric",
        success: function(weather){
            var icon = weather.weather[0].icon;
            console.log(icon);
            switch (icon) {
                case "01n":  $("#weather-icon").attr("src", "./icons/png/04.png");
                    break;
                case "01d":  $("#weather-icon").attr("src", "./icons/png/01.png");
                    break;
                case "02n":
                case "02d":  $("#weather-icon").attr("src", "./icons/png/02.png");
                    break;
                case "03n":
                case "03d":
                case "04n":
                case "04d":  $("#weather-icon").attr("src", "./icons/png/03.png");
                    break;
                case "09n":
                case "09d":  $("#weather-icon").attr("src", "./icons/png/21.png");
                    break;
                case "10n": $("#weather-icon").attr("src", "./icons/png/31.png");
                    break;
                case "10d":  $("#weather-icon").attr("src", "./icons/png/11.png");
                    break;
                default:        
            }   
        }
    })
};

$("#sub").click(function(e){
    getWeather();
    getIcon();
    
});
$(window).keydown(function(e){    
    if (e.which == 13) {
        $("#city").blur();
        e.preventDefault();
        getWeather();
        getIcon();
    } 
});

