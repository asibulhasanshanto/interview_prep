var peakIndexInMountainArray = function (arr) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = start + parseInt((end - start) / 2);
    if (
      arr[mid] - (mid === 0 ? 0 : arr[mid - 1]) > 0 &&
      arr[mid] - (mid === arr.length - 1 ? 0 : arr[mid + 1]) > 0
    ) {
      return mid;
    } else if (
      arr[mid] - (mid === 0 ? 0 : arr[mid - 1]) > 0 &&
      arr[mid] - (mid === arr.length - 1 ? 0 : arr[mid + 1]) < 0
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]));

// better solution
var peakIndexInMountainArray = function (arr) {
  if (arr.length < 3) return -1;
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
};
