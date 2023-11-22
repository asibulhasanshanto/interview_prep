const permutations: Function = function (
  processed: string,
  unprocessed: string
): void {
  if (unprocessed.length === 0) {
    console.log(processed);
    return;
  }

  var ch = unprocessed.charAt(0);
  for (var i = 0; i <= processed.length; i++) {
    var f = processed.substring(0, i);
    var s = processed.substring(i, processed.length);
    permutations(f + ch + s, unprocessed.substring(1));
  }
};

console.log(permutations("","abc"))
