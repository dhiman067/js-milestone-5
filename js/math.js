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