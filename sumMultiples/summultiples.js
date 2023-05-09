function solution(n = 7) {
  let sum = 0;

  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      console.log(i);
      sum = sum + i;
    }
  }
  return sum;
}
console.log(solution());
