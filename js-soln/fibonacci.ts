export function fibonacci(n){
    if(n <2)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}


export function fibMaster(){
    let cache ={}
    return function fib(n){
        if(n in cache){
            console.log('from cache !')
            return cache[n];
        }
        else {
            cache[n] = fibonacci(n-1) + fibonacci(n-2);
            console.log('calculating !')
            return cache[n];
        }
    }
}

const myfib = fibMaster();
console.log(myfib(40));

// 0 1 1 2 3 5 8 13
// 0 1 2 3 4 5 6 7