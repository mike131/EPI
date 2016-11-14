/**
 * Created by mlee on 11/14/16.
 * Check if a decimal integer is a palindrome
 */

function isPalindrome(testInt) {
    if (testInt < 0) {
        // Negative decimal cannot be a palindrome, due to  starting with a -
        return false;
    } else if (testInt === 0) {
        // According to problem question, 0 is considered a palindrome
        return true;
    }

    // To test if a decimal integer is a palindrome, we can simply compare it to it's reverse
    // Convert both to string (not necessary, we can also just do a == comparison)
    if (testInt === testInt.toString().split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

var args = process.argv.slice(2);
console.log('Is ', args[0], ' a palindrome? ', isPalindrome(args[0]));