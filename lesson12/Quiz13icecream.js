/*
 * Programming Quiz: Ice Cream (3-6)

 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl" )&& (toppings === "sprinkles" || toppings === "peanuts")){

    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);

}

