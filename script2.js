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
                $('#direct').text(data.wind.deg);
//}
             }
          });
//    $('#submitWeather').click(function(){
//      var city = $("#city").val();
//      console.log('click');
//      if(city != ''){
          

        } else $("#error").html('Enter City');
    });
});




/*$(document).ready(function() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var temp;
            var TempF;
            var TempC;
    $.ajax({
         method: "GET",
         url: "https://api.openweathermap.org/data/2.5/weather",
         data: {lat: lat, lon: long, units:'imperial', APPID:"10bfa7a03dd5e3c5cfc68b4cb722a439"},
           success: function(data) {
              temp = data.main.temp;
              $('#city').text(data.name);
              $('#temp').text(temp.toFixed(0));
              $('#description').text(data.weather[0].description);
              $('#weatherType').text(data.weather[0].main);
            }
          });
        }
      }
  });
     
  $("#FahrToCel").click(function() {*/