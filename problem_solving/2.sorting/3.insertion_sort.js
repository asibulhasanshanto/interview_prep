const insertionSort = function (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j >= 0; j--) {
      if (arr[j] < arr[j-1]) {
        var temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
};

console.log(insertionSort([2, 4, 1, 8, 100, 4,13, 5, 0, 10]));
