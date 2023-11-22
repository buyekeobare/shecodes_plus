let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};
console.log(paris["temperature"]);

let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 20,
  capitalCity: false
};
console.log(sydney.temperature);

let australianCities = ["Canberry", "Sydney", "Melbourne"];
console.log(australianCities[0]);
console.log(australianCities[1]);
console.log(australianCities[2]);

let cities = [
  {
    name: "Toronto",
    country: "Canada",
    language: "English",
    temperature: 17,
    capitalCity: false
  },

  {
    name: "New york",
    country: "USA",
    language: "English",
    temperature: 12,
    capitalCity: false
  },

  {
    name: "London",
    country: "England",
    language: "English",
    temperature: 10,
    capitalCity: true
  }
];

console.log(cities[0].name);
console.log(cities[0].temperature);

console.log(cities[1].name);
console.log(cities[1].temperature);

console.log(cities[2].name);
console.log(cities[2].temperature);
