var fs = require('fs');
  

// PART 1
let lastInput;
let largermessurments = 0;
fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    const input = +line;
    if (lastInput === undefined) {
        // console.log(input, '(N/A - no previous measurement)');
    } else if (lastInput < input) {
        // console.log(input, '(increased)');
        largermessurments++;
    } else {
        // console.log(input, '(decreased)');
    }
    lastInput = input;
});
console.log(`PART 1: There are ${largermessurments} measurements that are larger than the previous measurement.`);
// !PART 1


// PART 2
let lastInput2;
let largermessurments2 = 0;
const allnumbers = [];
fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    const input = +line;
    allnumbers.push(input);
});


for (let i = 0; i < allnumbers.length; i++) {
    const number1 = allnumbers[i];
    const number2 = allnumbers[i + 1];
    const number3 = allnumbers[i + 2];

    const sum = number1 + number2 + number3;
    if (lastInput2 === undefined) {
        // console.log(sum, '(N/A - no previous measurement)');
    } else if (lastInput2 < sum) {
        // console.log(sum, '(increased)');
        largermessurments2++;
    } else {
        // console.log(sum, '(decreased)');
    }
    lastInput2 = sum;

    
}
console.log(`PART 2: There are ${largermessurments2} sums that are larger than the previous sum.`);
// !PART 2