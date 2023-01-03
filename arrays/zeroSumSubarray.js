// 12.31.22
// O(n) time
// O(n) space

function zeroSumSubarray(nums) {

  const subsums = {};
  subsums[0] = true;
  let subsum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    subsum += nums[i];
    if (subsums[subsum]) return true;
      else subsums[subsum] = true;
  }

  return false;
}