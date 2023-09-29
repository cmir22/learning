const twoSum = (nums = [], target) => {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];

    if (rest in numMap) {
      return [numMap[rest], i];
    }

    console.log(nums[i]);
    numMap[nums[i]] = i;
  }

  return null; // If no solution is found
};

console.log(twoSum([3, 1, 1, 3], 6));
// twoSum([2, 7, 11, 15], 9);
