
// not solved
//==================
const subarray: Function = function (
  processed: number[],
  unprocessed: number[]
): number[][] {
  if (unprocessed.length === 0) {
    return [processed];
  }
  var next = [...processed, unprocessed[0]];
  var left = subarray(next, unprocessed.slice(1));
  var right = subarray(processed, unprocessed.slice(1));
//   console.log(
//     processed,
//     left,
//     right,
//     "chheck",
//     processed[processed.length - 1],right[0][right[0].length-1]
//   );
  if (
    processed.length === 0 ||
    processed[processed.length - 1]===right[0][right[0].length-1]
  ) {
    return left.concat(right);
  }
  return left;
};

function maxSubArray(nums: number[]): number {
  var subsets = subarray([], nums);
  var max = -999999;
  for (var i = 0; i < subsets.length; i++) {
    var sum = 0;
    for (var j = 0; j < subsets[i].length; j++) {
      sum += subsets[i][j];
    }
    if (sum > max) {
      max = sum;
    }
  }

  console.log(subsets);

  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
