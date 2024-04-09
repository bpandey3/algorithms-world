const reverseMyString = function(...args){
    args.forEach(e => {
        console.log(e)
        
    });
    const result = args.map(str => str.split("").reverse().join(""));
    return result;
}

console.log(reverseMyString("civic", 'precision','anagram'));