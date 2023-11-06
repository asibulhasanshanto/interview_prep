function isPrime(num) {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrimes(number) {
  // create and boolean array of length of number
  var numbers = [];
  for (var i = 0; i < number; i++) {
    numbers.push(true);
  }

  //   check for every true number from 0-sqrt(number)
  for (var i = 1; i < Math.sqrt(number); i++) {
    if (numbers[i]) {
      if (isPrime(i + 1)) {
        // make every multiple of it as false
        for (var j = 2; j * (i + 1) <= number; j++) {
          numbers[(j * (i + 1))-1] = false;
        }
      } else {
        numbers[i] = false;
      }
    }
  }

  // console.log(numbers);

    // print the primes
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i]) {
      console.log(i + 1);
    }
  }
}

generatePrimes(100000);


// time complexity: O(nloglogn)