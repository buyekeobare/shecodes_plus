 let weather = {
   paris: {
     temp: 19.7,
     humidity: 80
   },
   tokyo: {
     temp: 17.3,
     humidity: 50
   },
   lisbon: {
     temp: 30.2,
     humidity: 20
   },
   "san francisco": {
     temp: 20.9,
     humidity: 100
   },
   oslo: {
     temp: -5,
     humidity: 20
   }
 };
 
 let city = prompt("Enter a city");
 city = city.toLowerCase().trim();

 if (weather[city] !== undefined) {
  let temperature = weather[city.toLowerCase()].temp;
  let humidity = weather[city.toLowerCase()].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9 / 5) + 32);
  
  alert(`It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city.toLowerCase()} with a humidity of ${humidity}%`);
} else {
   alert(
     `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}`
   );
  };

  
 