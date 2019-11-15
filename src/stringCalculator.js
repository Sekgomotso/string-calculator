class StringCalculator {
    
    constructor (){}

    add (stringNumbers) {
        // regular expression for new line and comma acceptance
        var splitted = stringNumbers.split (/[\n\,]/); 
        var add = 0;
        var i = 0;

        // return zero for an empty string

        if (stringNumbers == "") {
            return 0;
        } else {
        
        // Add unknown amount of numbers
        
        for (i = 0; i < splitted.length; i++) {

        // change string into an interger (parseInt)
            add += parseInt(splitted[i]);
        }
        return add;
        }
    }
 }

var cal = new StringCalculator();
console.log(cal.add(""));
console.log(cal.add("1"));
console.log(cal.add("1,2"));
console.log(cal.add("1,2,3,4"));
console.log(cal.add("1\n4,8"));

module.exports = {
    StringCalculator
}