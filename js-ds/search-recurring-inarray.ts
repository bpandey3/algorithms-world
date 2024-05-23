//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function searchOccurenceinArray(arr1){
    for(let i=0; i< arr1.length; i++)
        {
        //     const index = arr1.indexOf(arr1[i]);

        //     if(index >=0 ){
        //         return arr1[i];   
        //     }
        // }

        for(let j=i+1; i< arr1.length; i++)
            {
             if(arr1[i]===arr1[j]){
                return arr1[i];
             }
            }
        }
    

}


function searchOccurenceinArrayHM(arr1){
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
    console.log("1st ----> ",map[arr1[i]],arr1[i])
      if (map[arr1[i]] !== undefined) {
        return arr1[i]
      } else {
        map[arr1[i]] = i;
        console.log("2nd ----> ",map[arr1[i]])
      }
    }
    return undefined;


}


console.log(searchOccurenceinArrayHM([2,1,1,2,3,5,1,2,4]));