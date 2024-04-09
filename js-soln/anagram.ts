const isAnagram = (source:string, target:string) => {
    if(source.length != target.length)
        return false;
     if(source.toLowerCase() === target.toLowerCase())
        return false;

    const first =  source.split("").sort().join("");
    const last = target.split("").sort().join("");
    //console.log('first last',first,last);
    return first === last;
}
    

const isAbagram = isAnagram('silent', 'listen')
console.log(isAbagram);