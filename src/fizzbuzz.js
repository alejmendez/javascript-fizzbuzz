const divisible = (number, divisor) => number % divisor === 0;
const fizzbuzz = number => {
    if (typeof number !== 'number') {
        throw new Error('the argument must be a number');
    }

    if (number === 0) {
        return 0;
    }

    if (divisible(number, 5) && divisible(number, 3)) {
        return 'fizzbuzz';
    }

    if (divisible(number, 3)) {
        return 'fizz';
    }

    if (divisible(number, 5)) {
        return 'buzz';
    }

    return number;
}

const print = (ini, end) => {
    for (let i = ini; i <= end; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

module.exports = {
    fizzbuzz,
    print,
};