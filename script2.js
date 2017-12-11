/*global $ APIKEY */

var city = 'Providence';
$(document).ready(function(){
    console.log('hi');
    $.ajax({
               url: "https://api.openweathermap.org/data/2.5/weather?q=" + city 
                + "&units=metric" + "&APPID=APIKEY",
               method: "GET",
               dataType: "jsonp",
               success: function(data){
                   console.log(data);
                   //function show(data{
                $('#city').text(data.name + "," + data.sys.country);
                $('#weather').text(data.weather[0].main);
                $('#temp').text(data.main.temp);
                $('#description').text(data.weather[0].description);
                $('#pressure').text(data.main.pressure);
                $('#humidity').text(data.main.humidity);
                $('#minTemp').text(data.main.temp_min);
                $('#maxTemp').text(data.main.temp_max);
                $('#speed').text(data.wind.speed);
//}
             }
          });
    $('#submitWeather').click(function(){
     var city = $("#city").val();
     console.log('click');
      if(city != ''){
          

        } else $("#error").html('Enter City');
    });
});
