// brute force solution
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// little optimzed(2-sqrt(num))
function isPrimeSqrt(num) {
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function main() {
  for (var i = 1; i < 1000000; i++) {
    // console.log(i, isPrime(i));
    if (isPrimeSqrt(i)) {
      console.log(i);
    }
  }
}

main();
