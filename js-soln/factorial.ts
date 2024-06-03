export function factorial(value:number){
    if(value ==2 ||value ==1 )
        return value;

        return value * factorial(value-1)
}

console.log(factorial(30))