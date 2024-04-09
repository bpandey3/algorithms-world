const isPalindrome = function (str1) {
    var first = str1;
    var reverse = str1.split("").reverse().join("");
    //console.log('first last', first, reverse);
    return first === reverse;
};

const input = 'civic';
console.log(`is string ${ input} is palindrome ? ${isPalindrome(input)}`)