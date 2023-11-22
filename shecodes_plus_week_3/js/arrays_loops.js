// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
console.log(weekDays);

// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[1]);
console.log(weekDays[0]);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
weekDays[0] = "Funday";
// Log the array
console.log(weekDays);

// Challenge 4
// Remove Sunday and Monday
weekDays.shift();
weekDays.shift();
// Log the array
console.log(weekDays);

// Challenge 5
// Remove Wednesday and Thursday
delete weekDays[1];
delete weekDays[2];
// Log the array
console.log(weekDays);


// Challenge 6
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
function showTemperature(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
}
weekDays.forEach(showTemperature);

