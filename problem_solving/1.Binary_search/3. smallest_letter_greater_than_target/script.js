// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/


var nextGreatestLetter = function (letters, target) {
  var start = 0;
  var end = letters.length - 1;

  while (start <= end) {
    var mid = start + parseInt((end - start) / 2);
    if (target < letters[mid]) {
      end = mid - 1;
    } else if (target > letters[mid]) {
      start = mid + 1;
    } else {
      if (letters[mid + 1] == undefined) {
        return letters[0];
      } else {
        for (var i = mid; i < letters.length - 1; i++) {
          if (letters[i] !== letters[i + 1]) {
            return letters[i + 1];
          }
        }
        return letters[0];
      }
    }
  }
  return letters[end + 1] == undefined ? letters[0] : letters[end + 1];
};

const letters = ["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"];
const target = "v";
console.log(nextGreatestLetter(letters, target));

// easy solution
var nextGreatestLetter = function (letters, target) {
  left = 0;
  right = letters.length - 1;

  while (left <= right) {
    mid = Math.trunc((right + left) / 2);
    if (letters[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return letters[left] > target ? letters[left] : letters[0];
};
