/*
https://leetcode.com/problems/search-insert-position/

Easy

*/

const arr = [1, 3, 4, 5, 6, 7, 12, 23, 45, 67, 89];
const target = 9;

function binarySearch(nums, target) {
  var start = 0;
  var end = nums.length - 1;

  while (start <= end) {
    var mid = start + parseInt((end - start) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return end + 1;
}

console.log(binarySearch(arr, target));
