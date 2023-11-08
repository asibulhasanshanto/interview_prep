// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
//  33
const nums = [3, 1];
const target = 1;

function binarySearch(nums, target) {
  var start = 0;
  var end = nums.length - 1;

  while (start <= end) {
    var mid = start + parseInt((end - start) / 2);
    if (target < nums[mid]) {
      if (nums[start] <= nums[mid]) {
        if (target >= nums[start] && target < nums[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        if (target > nums[mid] && target <= nums[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    } else if (target > nums[mid]) {
      if (nums[mid] <= nums[end]) {
        if (target > nums[mid] && target <= nums[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      } else {
        if (target < nums[mid] && target >= nums[start]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch(nums, target));

// best runtime
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
