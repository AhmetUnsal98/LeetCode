function solution(results = [2, 2, 2, 3, 2, 0, 1, 1]) {
  var maxFreq = 0;
  var winner;
  for (var i = 0; i < results.length; i++) {
    var counter = 0;

    for (var j = 0; j < results.length; j++) {
      if (results[i] == results[j]) {
        counter++;
      }
      if (counter > maxFreq) {
        maxFreq = counter;
        winner = results[j];
      }
    }
  }
  return winner;
}
console.log(solution());
