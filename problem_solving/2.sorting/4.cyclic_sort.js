const cyclicSort = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const j = arr[i] - 1;
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
};

console.log(cyclicSort([3, 1, 5, 4, 2]));
