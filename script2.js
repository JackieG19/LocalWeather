/*global $ navigator*/ /*global APIKEY*/

$(document).ready(function() {
    var location;
     var lat;
     var lon; 
     var tempC;
     var tempF;
   console.log(location);
   
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {      
     lon = position.coords.longitude;
     lat = position.coords.latitude;
     console.log(navigator.geolocation);      
     var myUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' +
                   lat + '&lon=' + lon + '&units=metric&appid=' + APIKEY;
                   console.log(myUrl);
       $.ajax({
           url : myUrl,
           method : 'GET',
           success : function (data) {        
             var temp = data.main.temp;
             var location = data.name;                       
             var imgSrc = data.weather[0].icon;
             tempC = Math.round(temp);
             tempF = Math.round((temp * 1.8) + 32);
             console.log(temp);
             
             $('#pic').html("<img src=\"http://openweathermap.org/img/w/" + imgSrc + ".png\" width=\"80px\"></img><br>");
             $('#message').html("<h4>" + tempC + 'C ' + location);
           }                                                           
       });            
   });
 } else 
     $('#message').html("<h4>No Location</h4>");    
   // F <----> C //
   $(document).ready(function() {          
     $("#togBtn").on("click", function(){      
       var weather = document.getElementById('message').innerHTML;     
       if(weather.indexOf("C") > 0)                       
         $('#message').html(weather.replace(tempC + "C", tempF + "F"));
       else         
         $('#message').html(weather.replace(tempF + "F", tempC + "C"));                 
      });
   });
});