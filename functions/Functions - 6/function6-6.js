// Write a function to input temperature in Centigrade and convert to Fahrenheit.

function convert(celsius){
    var farenheit = (celsius * 1.8) + 32;
    return celsius + ' stepeni je ' +  farenheit + ' farenhajta.';
}

console.log(convert(15));