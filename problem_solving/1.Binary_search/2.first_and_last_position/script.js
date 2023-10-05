/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

Medium

*/

const arr = [5, 7, 7, 8, 8, 10, 10, 10];
const target = 2;

function binarySearch(nums, target) {
  var start = 0;
  var end = nums.length - 1;

  while (start <= end) {
    var mid = start + Math.floor((end - start) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      var localStart = mid;
      var localEnd = mid;
      while (
        nums[localStart - 1] == nums[mid] ||
        nums[localEnd + 1] == nums[mid]
      ) {
        if (nums[localStart - 1] == nums[mid]) {
          localStart -= 1;
        } else {
          localEnd += 1;
        }
      }
      return [localStart, localEnd];
    }
  }

  return [-1, -1];
}

console.log(binarySearch(arr, target));
