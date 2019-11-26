class StringCalculator {
    
    constructor (){}

    add (stringNumbers) {
        // regular expression for different delimiters acceptance
        var splitted = stringNumbers.split (/[/\n\,\;\{}\|]/g);
        var add = 0;
        var i = 0;

        // return zero for an empty string

        if (stringNumbers == "") {
            return 0;
        }

        // Numbers greater than a 1000 should be ignored

        if (stringNumbers > 1000) {
            stringNumbers = 0;
        }
       
        else {
        
        // Negatives not allowed

        for (var i = 0; i < stringNumbers.length; i++) {
            if (stringNumbers[i] == "-") {
                throw new Error('negatives not allowed');
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

module.exports = {
    StringCalculator
}