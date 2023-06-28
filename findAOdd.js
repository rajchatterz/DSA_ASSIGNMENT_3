let nums = [2,2,1,1,5,6,6]
function singleNumber(nums) {
    let result = 0
    for(let i=0;i<nums.length;i++){
        result^=nums[i]
    }
    return result
}
  console.log(singleNumber(nums))