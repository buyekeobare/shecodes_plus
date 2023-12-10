let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let city = prompt("Enter a city");
city = city
.toLowerCase()
.trim();

if (weather[city] !== undefined) {
  alert(
    `It is currently ${Math.round(
      weather[city.toLowerCase()].temp
    )}°C in ${city.toLowerCase()} with a humidity of ${
      weather[city.toLowerCase()].humidity
    }%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${city}`
  );
}
