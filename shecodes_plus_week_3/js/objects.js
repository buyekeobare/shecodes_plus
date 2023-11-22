let weather = {}
console.log(weather);

weather = {
temp: 19,
humidity: 50,
}
console.log(weather.temp);
console.log(weather.humidity);

// weather["windSpeed"] = 3;
weather.windSpeed = 3;
console.log(weather.windSpeed);

console.log(weather["temp"]);
console.log(weather["humidity"]);
console.log(weather["windSpeed"]);

// console.log(weather.windSpeed) === console.log(weather["winsSpeed"]);
let forecast = [{
  day: "Sunday",
  temp: 20
},

{
  day: "Monday",
  temp: 19
},

{
  day: "Tuesday",
  temp: 19
},

{
  day: "Wednesday",
  temp: 20
},

{
  day: "Thursday",
   temp: 20
},

]
console.log(forecast);