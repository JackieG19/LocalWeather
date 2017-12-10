/*global $ APIKEY navigator*/

$(document).ready(function() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var temp;
    $.ajax({
         method: "GET",
         url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=APIKEY`,
           success: function(response) {
              temp = response.main.temp;
              $('#temp').text(temp.toFixed(0));
              $('#description').text(response.weather[0].description);
              $('#weatherType').text(response.weather[0].main);
              $('#city').text(response.name);
            }
          });
        }
      }
  });
     
  