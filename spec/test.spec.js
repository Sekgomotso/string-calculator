var stringCalculator = require ("../src/stringCalculator")

describe ("string calculator add two returns sum", () => {
    it ("should return 0", () => {
        expect(stringCalculator.add("").toBe(0));
    });

    it ("must return the number", () => {
        expect(stringCalculator.add("1").toEqual(1));
    });

    it ("must return the sum of the two numbers", () => {
        expect(stringCalculator.add("1,2").toEqual(3));
    });
});