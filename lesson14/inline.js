/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

/* finish the function expression */
emotions("happy", function (num) {
    var result = "";
    for (var i = 1; i <= num; i++) {
        result += "ha";
    }
    return result + '!';

});
// your code goes here
// call the emotions function here and pass in an
// inline function expression
