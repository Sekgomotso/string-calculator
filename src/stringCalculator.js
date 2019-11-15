class StringCalculator {
    
    constructor (){}

    add (stringNumbers) {
        // regular expression for different delimiters acceptance
        var splitted = stringNumbers.split (/[/\n\,\;\{}\|]/); 
        var add = 0;
        var i = 0;

        // return zero for an empty string

        if (stringNumbers == "") {
            return 0;
        }

        // Numbers greater than a 1000 should be ignored

        if (stringNumbers > 1000) {
            stringNumber = 0;
        }
       
        else {
        
        // Negatives not allowed

        for (var i = 0; i < stringNumbers.length; i++) {
            if (stringNumbers[i] == "-") {
                try {
                    throw "negatives not allowed";
                } catch(error) {
                    console.log (error);
                }
            }
        }
        
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
console.log(cal.add("1\n4,8|5;5"));
console.log(cal.add("-1,3"));
console.log(cal.add("1001,3"));

module.exports = {
    StringCalculator
}