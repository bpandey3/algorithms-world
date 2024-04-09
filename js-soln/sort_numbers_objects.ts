
const sortNumber = function(arr1:Array<number>){
    const finalArray = arr1.sort((a,b) => b-a).map((val,index) => index);
    console.log('finalArray',finalArray);

}

sortNumber([0,1,0,3,12]);

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
    },
    {
        id:3,
        name: "Ben P",
        isActive: true,
        age:40
    }
];

const userNames = users.filter(x=> x.isActive).sort((a,b)=>a.age-b.age).map(x=> x.name);

console.log(userNames);