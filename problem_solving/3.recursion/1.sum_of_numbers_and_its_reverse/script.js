var sumOfNumberAndReverse = function (num) {
  if (num === 0) return true;
  for (var i = 1; i <= parseInt(num); i++) {
    if (i + reverse(i, digitCount(i)) === num) {
      return true;
    }
  }
  return false;
};

const digitCount = function (number) {
  var count = 0;
  while (number !== 0) {
    number = parseInt(number / 10);
    count++;
  }
  return count;
};

const reverse = function (number, numOfDigits) {
  if (parseInt(number / 10) === 0) {
    return number % 10;
  }
  return (
    (number % 10) * 10 ** (numOfDigits - 1) +
    reverse(parseInt(number / 10), numOfDigits - 1)
  );
};
console.log(sumOfNumberAndReverse(181));
console.log(reverse(140, 3));


// https://leetcode.com/problems/sum-of-number-and-its-sumOfNumberAndReverse
//2433