// Basic Math Calculations

function map(c, s, p, m) {
  let X;
  let result = [];   // Create a new Array
  for (i=0; i<1; i++) // Declare  //i=0 Starting Digit, i<5 = Max digits
  //result[i] = f(z[i]);
  result[i] = c(s[i]);
  Chat.log(result.toString());
}
const c = function(c) {
  return c * c * c;
}
const s = function(s) {
  return s * s; 
}
const p = function(p) {
  return p + p;
}
const m = function(m) {  // m - m make's no sense but well, there it is.
  return m - m;
}
//let numbers = [0, 1, 22, 5, 10, 22]; { //Number arrays.
let numbers = [1233]; {
//}
//let numbers2 = [3, 37, 3, 52, 2]; {
}
Chat.log("Cube of..." +numbers) // Calculates cubical from numbers array
let cube = map(c, numbers); {
}
Chat.log("Square of..." +numbers) // Calculates square from num array
let square = map(s, numbers); {
}
Chat.log(numbers+ "+" +numbers)  // Simple "+"
let plus = map(p, numbers); 
