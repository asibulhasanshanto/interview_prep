const selectionSort = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var max = -9999;
    var position = -1;
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > max) {
        max = arr[j];
        position = j;
      }
    }
    if (position != -1) {
      var temp = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = arr[position];
      arr[position] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([2, 4, 1, 8, 100, -10, 4, 5, 0, 10]));
