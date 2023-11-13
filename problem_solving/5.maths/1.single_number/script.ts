var singleNumber = function (nums: number[]): number {
  var result: number = nums[0];

  for (var i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
};

console.log(singleNumber([1]));
