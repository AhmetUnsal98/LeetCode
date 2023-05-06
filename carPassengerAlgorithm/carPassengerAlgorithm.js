function solution(P = [1, 4, 1], S = [1, 5, 11]) {
  var numberOfCars = 0;
  var sumPeople = 0;
  for (var i = 0; i < P.length; i++) {
    sumPeople += P[i];
  }
  var sortedSeats = S.sort(function (a, b) {
    return a - b;
  });
  while (sumPeople > 0) {
    sumPeople -= sortedSeats[numberOfCars];
    numberOfCars++;
  }
  return numberOfCars;
}
console.log(solution());
