let nums = [1,0,-1,0,-2,2,5]
let target = 0
function quadruplets(nums,target){
    nums.sort((a,b)=>a-b)
    console.log(nums)
    const result =[]

    const backtrack = (start,current,currentSum)=>{
        if(current.length===4){
            if(currentSum===target){
                result.push([...current])
            }
            return;
        }
        for(let i=start;i<nums.length;i++){
            if(i>start && nums[i]===nums[i-1]){
                continue;
            }

            current.push(nums[i]);
            backtrack(i+1,current,currentSum+nums[i])
            current.pop()
        }
    }
    backtrack(0,[],0)
    return result;
}
const result = quadruplets(nums,target)
console.log(result)