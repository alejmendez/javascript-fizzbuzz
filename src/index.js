const fizzbuzz = require("./fizzbuzz");

const print = (ini, end) => {
    for (let i = ini; i <= end; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

print(1, 100);