function sort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  }

  var mid: number = Math.floor(arr.length / 2);

//   console.log(arr.slice(0, mid), arr.slice(mid));
  var left: number[] = sort(arr.slice(0, mid));
  var right: number[] = sort(arr.slice(mid));

  return merge(left, right);
}

function merge(first: number[], second: number[]): number[] {
  // console.log(first, second)
  var merged: number[] = [];

  var i = 0;
  var j = 0;
  var k = 0;

  while (i < first.length && j < second.length) {
    if (first[i] <= second[j]) {
      merged[k] = first[i];
      i++;
    } else {
      merged[k] = second[j];
      j++;
    }
    k++;
  }
//   console.log(i, j, k);

  //   copy the remaining elements (if any)
  if (i != first.length) {
    for (var l = i; l < first.length; l++) {
      merged[k] = first[l];
      k++;
    }
  }
  if (j != second.length) {
    for (var l = j; l < second.length; l++) {
      merged[k] = second[l];
      k++;
    }
  }
  //   console.log(merged)
  return merged;
}

console.log(sort([2, 6, 3, 8, 1,600]));
// console.log(merge([2, 6], [1, 3, 8]));
