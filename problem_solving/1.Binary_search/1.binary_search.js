const arr = [1, 3, 4, 5, 6, 7, 12, 23, 45, 67, 89];
const target = 89;

function binarySearch(arr, target) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = start + parseInt((end - start) / 2);
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch(arr, target));
