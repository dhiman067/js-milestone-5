function evenOdd(str) {
    const totalChracters = str.length;
    if (typeof str !== 'string') {
        console.log("warning: plz enter a string");
    }
    else if (totalChracters % 2 == 0) {
        return 'even'
    }
    else {
        return 'odd'
    }
}
console.log(evenOdd('programming hero'));



let count = 0; console.log(parseInt("count" + 1));

const num = Math.pow(4, 0.5) + "spiderman" + "987" + Math.sqrt(9);
console.log(num)


function generatePin() {
     return Math.floor(Math.random() * 90000) + 10000; 
    }
console.log(generatePin())

const num1 = !isNaN("10X");
console.log(num1);


const product = 5; const price = "7"; const subTotal = product * price; const tax = subTotal/10; const total = subTotal + tax; console.log(total)
