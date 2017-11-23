function laugh(num) { //declare a laugh() function
    var haha = ""; //give an empty value to the haha variable
    for (var i = 1; i <= num; i++) { // for loop . As long as i (set to 0 at first) is less than the num parameter (here 3) :
        haha += "ha"; // add one "ha" to the haha variable. then i++
    }
    return haha + "!"; //return the number of added "ha" to haha (here 3 times so "hahaha") concatenated with a "!"
}
console.log(laugh(3)); //prints the return (here : "hahaha!"")