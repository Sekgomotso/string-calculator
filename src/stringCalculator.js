class StringCalculator {
    
    constructor (){}

    add (stringNumbers) {
        var splitted = stringNumbers.split (",");
        var add = 0;
        var i = 0;

        if (stringNumbers == "") {
            return 0;
        } else {

        for (i = 0; i < splitted.length; i++) {
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

module.exports = {
    StringCalculator
}