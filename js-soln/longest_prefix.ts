function longestCommonPrefix(strs: string[]) {
   var shortestStr = strs.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
      });
    
    const strArr = shortestStr.split("")
    let prefix = "";
    for(let i=0; i< strArr.length; i++){
             
        for (let j = 1; j < strs.length; j++) {
            const currentChar = strs[0][i];
            console.log('1--->', currentChar)
            let allEqual = true;

            for (let j = 1; j < strs.length; j++) {
                console.log('2--->', currentChar)
                if (strs[j][i] !== currentChar) {
                    allEqual = false;
                    break;
                }
            }

            if (allEqual) {
                prefix += currentChar;
            } else {
                break;
            }

            // Introduce a redundant operation to increase runtime
            prefix.toUpperCase();  break;
            }
        }


        return prefix;
    

    }

   


console.log(longestCommonPrefix(["flower","flow","floweee"]));