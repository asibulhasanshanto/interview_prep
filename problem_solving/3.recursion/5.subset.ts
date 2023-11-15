// given a string "abc", print all the subsets of the string // ['c', 'b', 'bc', 'a', 'ac', 'ab', 'abc' ]

const subsets: Function = function (
  processed: string,
  unprocessed: string
): void {
  if (unprocessed.length === 0) {
    console.log(processed);
    return;
  }
  var char = unprocessed.charAt(0);
  //   processed step
  subsets(processed + char, unprocessed.substring(1));
  //un processed step
  subsets(processed, unprocessed.substring(1));
};

// subsets with returning nested array
const subsetsArr: Function = function (
  processed: string,
  unprocessed: string
): string[] {
  if (unprocessed.length === 0) {
    return [processed];
  }
  var char = unprocessed.charAt(0);

  //   processed step
  var left = subsetsArr(processed + char, unprocessed.substring(1));
  //un processed step
  var right = subsetsArr(processed, unprocessed.substring(1));

//   console.log(left, "l", right,'r', left.concat(right));
  var result:string[] = left.concat(right);
//   console.log(left)

  return result;
};

// subsets("", "abc");
console.log(subsetsArr("", "abc"));
