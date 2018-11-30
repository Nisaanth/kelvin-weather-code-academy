// Setting variable as a costant as the value wouldn't change.
//Current temperature in kelvin degrees.
const kelvin = 293;
// converting kelvin to celcius.
const celcius = kelvin - 273;
//  Formula already given. 
// converting celcius into fahrenheit.
let fahrenheit = celcius * (9 / 5 + 32);
// To avoid using getting a decimal number you use the Math.floor() method to round down the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
// string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// extra practice 
let newton = celcius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);