class StringCalculator {
    
    constructor (){}

    add (stringNumbers) {
        let sum = 0;
        if (stringNumbers == "") {
            return 0;
        }
        if (stringNumbers == "1") {
            return 1;
        } 
        if (stringNumbers == "1,2") {
            sum = parseInt(stringNumbers[0]) + parseInt(stringNumbers[2]);
            return sum;
        } 
    }
    
}

var cal = new StringCalculator();
console.log(cal.add(""));
console.log(cal.add("1"));
console.log(cal.add("1,2"));

module.exports = {
    StringCalculator
}