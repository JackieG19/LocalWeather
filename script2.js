/*global $ navigator */ /*global APIKEY*/

$(document).ready(function() {
   var location;
    var lat;
    var lon; 
    var tempC;
    var tempF;
  console.log(location);
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {      
    lon = position.coords.longitude; //var lon
    lat = position.coords.latitude; // var lat
    console.log(navigator.geolocation); //checking to see if navigator.geolocation works
      
    var myUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + 
                  lat + '&lon=' + lon + '&units=metric&appid=' + APIKEY;
                  console.log(myUrl);
      $.ajax({
          url : myUrl,//var myUrl
          method : 'GET',//request information from the url
          success : function (data) {        
            var temp = data.main.temp;
            var location = data.name;                       
            var imgSrc = data.weather[0].icon;
            tempC = Math.round(temp);
            tempF = Math.round((temp * 1.8) + 32);
            console.log(temp);//checking for temperature from the url 
            
            $('#pic').html("<img src=\"http://openweathermap.org/img/w/" + imgSrc + ".png\" width=\"80px\"></img><br>");
            $('#message').html("<h4>" + tempC + 'C ' + location);
          }                                                           
      });            
  });
} else 
    $('#message').html("<h4>No Location</h4>"); // displays temperature
    
  // F <----> C //
  $(document).ready(function() {          
    $("#Btn").on("click", function(){ // button function that changes farenheit to celcius
      
      var weather = document.getElementById('message').innerHTML; //id = message from html
      if(weather.indexOf("C") > 0)                       
        $('#message').html(weather.replace(tempC + "C", tempF + "F"));
      else         
        $('#message').html(weather.replace(tempF + "F", tempC + "C"));                 
    });
  });
});