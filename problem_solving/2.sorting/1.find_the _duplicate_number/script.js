var findDuplicate = function (nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  return nums[nums.length - 1];
};

console.log(findDuplicate([1, 3, 4, 2, 2]));

// leet code 287