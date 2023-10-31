// leetcode 2433
// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/?envType=daily-question&envId=2023-10-31

var findArray = function (pref) {
  var original = [pref[0]];
  for (var i = 1; i < pref.length; i++) {
    original[i] = pref[i - 1] ^ pref[i];
  }
  return original;
};

console.log(findArray([5, 2, 0, 3, 1]));
// console.log(5 ^ 2);
