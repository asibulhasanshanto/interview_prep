const digitOnce = function (arr) {
  var ans = 0;
  for (var i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }
  return ans;
};

console.log(digitOnce([1, 1, 2, 2, 3, 3, 4, 7, 7]));
