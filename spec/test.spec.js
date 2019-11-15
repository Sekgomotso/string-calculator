var {StringCalculator} = require("../src/stringCalculator");
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

describe ("must add unknown amount of numbers", () => {
    it("should return 10", () => {
        expect(cal.add("1,2,3,4")).toEqual(10);
    });

    it("must handle new lines between numbers", () => {
        expect(cal.add("1\n4,8")).toEqual(13);
    });

    it("must support different delimiters", () => {
        expect(cal.add("1\n4,8|5;5")).toEqual(23);
    });

    it("must ignore numbers greater than a 1000", () => {
        expect(cal.add("5+1001")).toEqual(5);
    });
});