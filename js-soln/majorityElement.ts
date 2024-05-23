function majorityElement(nums: number[]): number {
    if (nums.length <= 1) return nums.length;
        console.log(nums,nums.length)
        let max:number=1;
        let swapmax:number=0;

        for(let i:number = 0; i < nums.length; i++)
        {
             for(let j:number = 1; j <= nums.length; j++){
                if(nums[i] === nums[j]) {
                    max++;
                }
             }

             if(i==1)
                swapmax =max
             else if(swapmax < max) 
                swapmax =max

        
    }
    return swapmax;
};


console.log(majorityElement([3,2,3]))