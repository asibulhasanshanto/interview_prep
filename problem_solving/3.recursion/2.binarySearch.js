const binarySearch = function (arr, num) {
  const value = bin(arr, 0, arr.length - 1, num);
  return value;
};

const bin = function (arr, start, end, num) {
  if (start > end) return -1;
  const mid = start + parseInt((end - start) / 2);
  if (arr[mid] == num) {
    return mid;
  }
  if (arr[mid] > num) {
    return bin(arr, start, mid - 1, num);
  }
  return bin(arr, mid + 1, end, num);
};

console.log(binarySearch([2, 4, 6, 7, 10, 14, 50], 7));