function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
  
        if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
          closestSum = currentSum;
        }
  
        if (currentSum < target) {
          left++;
        } else if (currentSum > target) {
          right--;
        } else {
          return target; // Found exact match
        }
      }
    }
  
    return closestSum;
  }
  const nums = [-1, 2, 1, -4];
const target = 1;

const closestSum = threeSumClosest(nums, target);
console.log(closestSum);
