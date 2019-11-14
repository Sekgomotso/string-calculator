var {StringCalculator} = require ("../src/stringCalculator");
var cal = new StringCalculator();

describe ("string calculator add two returns sum", () => {
    it ("should return 0", () => {
        expect(cal.add("")).toBe(0);
    });

    it ("must return a number", () => {
        expect(cal.add("1")).toEqual(1);
    });

    it ("must return the sum of the two numbers", () => {
        expect(cal.add("1,2")).toEqual(3);
    });
});