console.log("Hello World!!")

function square(x) {
    return x*x;
}

console.log(square(8));

const nSquare = function(x) {
    return x*x;
}

const arrowSq = (x) => {
    return x*x;
}

// shorthand syntax
const arrSquare = (x) => x*x;

console.log("Normal JS function - ", square(8));
console.log("Other form of JS function - ", nSquare(8));

console.log("Arrow Function - ",arrowSq(8));
console.log("Arrow Fn - ", arrSquare(8))