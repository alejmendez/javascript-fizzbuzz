const { fizzbuzz } = require("./../fizzbuzz");

describe('fizzbuzz', () => {
    test('should print error message if the argument is not a number', () => {
        expect(() => fizzbuzz("1")).toThrow('the argument must be a number')
    })

    test('should print 1 if they receive 1', () => {
        const expected = 1
        const result = fizzbuzz(1)
        expect(expected).toBe(result)
    })

    test('should print fizz if they receive 3', () => {
        const expected = 'fizz'
        const result = fizzbuzz(3)
        expect(expected).toBe(result)
    })

    test('should print fizz if they receive a multiple of 3', () => {
        const expected = 'fizz'
        const result = fizzbuzz(6)
        expect(expected).toBe(result)
    })

    test('should print buzz if they receive a multiple of 5', () => {
        const expected = 'buzz'
        expect(expected).toBe(fizzbuzz(5))
        expect(expected).toBe(fizzbuzz(10))
        expect(expected).toBe(fizzbuzz(20))
    })

    test('should print fizzbuzz if they receive a multiple of 3 and 5', () => {
        const expected = 'fizzbuzz'
        expect(expected).toBe(fizzbuzz(15))
    })
})