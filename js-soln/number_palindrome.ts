function isPalindrome(x: number): boolean {
    if(x <0) return false;
    const r  = x.toString().split("");
    let palindrome = ""
    for(let i= r.length -1; i>=0; i--){
        //console.log(i)
        palindrome = palindrome + r[i];
        
    }
    console.log(palindrome)
    return x.toString()==palindrome;
};


console.log(isPalindrome(-12))