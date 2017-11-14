/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance) {
    if (isActive && balance > 0) {
        console.log(`Your balance is $ ${balance} .`);
    } else {
        if (isActive) {
            if (balance === 0) {
                console.log("Your account is empty.");
            } else {
                console.log("Your balance is negative. Please contact bank.");
            }
        } else {
            console.log("Your account is no longer active.");
        }
    }
} else {
    console.log("Thank you. Have a nice day!");
}