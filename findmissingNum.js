function findMissingRanges(nums, lower, upper) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > lower) {
        result.push(getRange(lower, nums[i] - 1));
      }
      lower = nums[i] + 1;
    }
  
    if (lower <= upper) {
      result.push(getRange(lower, upper));
    }
  
    return result;
  }
  
  function getRange(lower, upper) {
    if (lower === upper) {
      return [lower.toString()];
    } else {
      return [lower, upper];
    }
  }
  
  const nums = [0, 2, 3,5, 50, 75];
const lower = 0;
const upper = 99;

const missingRanges = findMissingRanges(nums, lower, upper);
console.log(missingRanges);
