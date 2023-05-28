

  // Welcome to the TypeScript Playground, this is a website
const arr1= [0,1,0,3,12];

const finalArray = arr1.sort((a,b) => b-a).map((val,index) => index);

//console.log('finalArray',finalArray);

const users = [
    {
        id:1,
        name: "Jack Pa",
        isActive: true,

        age:23
    },
     {
        id:2,
        name: "Vinay Mishra",
        isActive: true,
        age: 19
    },
     {
        id:3,
        name: "Rajesh Aandey",
        isActive: true,
        age:40
    }
];

const userNames = users.filter(x=> x.isActive).sort((a,b)=>a.age-b.age).map(x=> x.name);

const sortedNames = userNames.sort(
    (a,b) => a.split(" ")[1] > b.split(" ")[1] ? 1: -1
);
//console.log('userNames',sortedNames);

const range = (start:number, end:number) => [...Array(end-start).keys()].map((el) => el+start);

//console.log(range(34,99))

const Employee = function(id:number,name:string){

    this.id = id;
    this.name = name;
    
    this.printEmployee(){
        console.log('Employee Details ...', this.id, this.name)
    }


}

Employee.prototype.salary = function(salary:number){
    this.salary = salary; 
}

const isAnagra = (source:string, target:string) => {
    if(source.length != target.length)
        return false;
     if(source.toLowerCase() === target.toLowerCase())
        return false;

    const first =  source.split("").sort().join("");
    const last = target.split("").sort().join("");
    console.log('first last',first,last);
    return first === last;
}
    

//const isAbagram = isAnagra('silent', 'listen')
//console.log(isAbagram);

const isPalindrome = (str1:string) =>{
    let first = str1;
    let reverse = str1.split("").reverse().join("")
     console.log('first last',first,reverse);
    return first === reverse;
}

//console.log(isPalindrome('civic'))

const titleStr = (input:string) => {

return input.split("")[0].toUpperCase() + input.slice(1,input.length).toLowerCase();
}

//console.log(titleStr("i AM the STRINg"));

//var newVar;
console.log(newVar);
console.log(typeof(newVar));


var newVar= null;
console.log(newVar);
console.log(typeof(newVar))
