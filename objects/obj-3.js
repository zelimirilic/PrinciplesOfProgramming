// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

function alpha(str) {

return str.toLowerCase().split("").sort().join("");

}

console.log(alpha("Webmaster"));
