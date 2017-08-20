//worked with Aileen!
$(document).ready(function() {
console.log('main.js is connected!');

var city;
var temperature;
var description;
var minTemp;
var maxTemp;




  var makeCall = function(event){
    event.preventDefault;
    console.log('inside makeCall')
    // select the input value
    let zip = $('#zipcode').val();
    console.log(zip);

    // ADD YOUR AJAX CALL HERE FOR RANDOMUSER API
   let url =`http://api.openweathermap.org/data/2.5/weather?q=${zip},us&units=imperial&appid=6f0a8175dfb9fa9be8bb898270d37390`

    $.getJSON(url)
      .done(function(data) {
        city= data.name;
        temperature= data.main.temp;
        description= data.weather[0].description;
        minTemp= data.main.temp_min;
        maxTemp= data.main.temp_max;
        manipulateDom(city, temperature, description, minTemp, maxTemp)
      })
      .fail(function(err) { // if the data doesnt come back
        console.log(err);
      })
  }



   var manipulateDom = function(city, temperature, description, minTemp, maxTemp){
    $('#weather').html(search)
    $('#city').html(city)
    $('#temperature').html(temperature)
    changeColor();
    $('#description').html(description)
    $('#minTemp').html(minTemp)
    $('#maxTemp').html(maxTemp)
     }
 let search= document.querySelector('#search');
  search.addEventListener('click', makeCall);



   function changeColor() {
    if (temperature < 40) {
        $('#temperature').css('color', 'blue');
        }

      else if (temperature > 90){
        $('#temperature').css('color', 'red');
         }
       }
     })



/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/
