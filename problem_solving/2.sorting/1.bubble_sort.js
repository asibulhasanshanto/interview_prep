const bubbleSort = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
};

console.log(bubbleSort([2, 4, 1, 8, 100,-10, 4, 5, 0, 10]));
