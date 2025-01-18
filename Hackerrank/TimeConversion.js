// Hackerrank Time Conversion Problem
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//this one was long, i may be stupid
function timeConversion(s) {
    // Slicing the AM/PM out of the string and filtering out the ":"
    // That way, we have an array as such [HH,MM,SS]
    var timeString = s.split("").slice(0, 8).join("").split(":");
    var result;
    // Detecting if the String contains "AM", if not, then its "PM"
    if (s.split("").reverse()[1] === "A" || s.split("").reverse()[1] === "a") {
        // If its 12 am that means 00, so add the "00" at the beginning
        // minutes and seconds are always the same
        if (timeString[0] === "12") {
            return "00" + ":" + timeString[1].toString() + ":" + timeString[2].toString();
        }
        else if (timeString[0] === "11") {
            // I caught this while commenting, hackerrank did not
            return "11" + ":" + timeString[1].toString() + ":" + timeString[2].toString();
        }
        else {
            // Remember to add the extra "0" for single digit hours
            result = +timeString[0];
            return "0" + result.toString() + ":" + timeString[1].toString() + ":" + timeString[2].toString();
        }
    }
    else {
        if (timeString[0] === "12") {
            // Remember there is no such thing as 24:XX:XX
            // So never add 12 to the "12"
            return timeString[0].toString() + ":" + timeString[1].toString() + ":" + timeString[2].toString();
        }
        else {
            //we can ovbs add 12 in the rest of these cases
            result = +timeString[0] + 12;
            return result.toString() + ":" + timeString[1].toString() + ":" + timeString[2].toString();
        }
    }
}
var time = "11:40:03AM";
console.log(timeConversion(time));
//Shhh... no "export" clause <3
