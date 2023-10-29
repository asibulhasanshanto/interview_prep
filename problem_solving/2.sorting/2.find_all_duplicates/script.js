var findDuplicates = function (nums) {
  let i = 0;
  var duplicates = [];
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  for (var j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      duplicates.push(nums[j]);
    }
  }
  return duplicates;
};

console.log(findDuplicates([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]));

// https://leetcode.com/problems/find-all-duplicates-in-an-array/ 422