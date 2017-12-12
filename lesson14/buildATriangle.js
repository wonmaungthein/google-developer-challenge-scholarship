/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(triangleLength) {
    // Now I will declare a variable to store the triangle
    var triangle = ""; // Empty string

    for (var i = 1; i <= triangleLength; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}
// Return itself won't print anything to console so I write it inside console.log
console.log(buildTriangle(10));
