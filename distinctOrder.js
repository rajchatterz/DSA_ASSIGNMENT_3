let nums = [1,3,5,6]
let target = 6
function distinctOrder(nums,target){
    let start =0;
    let end = nums.length
    while(start<end){
        let mid = Math.floor((start+end)/2)
        if(mid){}
        else if(nums[mid]==target){
            return mid;
        }else if(nums[mid]<target){
            start=mid+1
        
        }else if(nums[mid]>end){
            return 1
        }
        else{
            end = mid-1
        }
    }
    return start
}
console.log(distinctOrder(nums,target))