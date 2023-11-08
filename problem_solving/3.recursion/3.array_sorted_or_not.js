const sortedOrNot = function (arr) {
  return arraySorted(arr, 0);
};

const arraySorted = function (arr, index) {
  if (index === arr.length - 2) {
    if (arr[index] <= arr[index + 1]) {
      return true;
    } else {
      return false;
    }
  }
  return arr[index] <= arr[index + 1] && arraySorted(arr, index + 1);
};

console.log(sortedOrNot([1, 3, 4, 5, 5, 7]));
