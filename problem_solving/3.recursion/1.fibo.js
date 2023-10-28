const main = function () {
  var x = fibo(30);
  console.log(x);
};

const fibo = function (n) {
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
};

main();
