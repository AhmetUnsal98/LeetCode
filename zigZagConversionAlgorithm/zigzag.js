function solution(string = "PAYPALISHIRING", numberOfRows = 4) {
  if (numberOfRows === 1 || string.lenght < numberOfRows) return string;

  let direction = false;
  let count = 0;
  let arr = new Array(numberOfRows).fill("");
  for (let i = 0; i < string.length; i++) {
    let curr = string[i];
    arr[count] += curr;
    if (count === 0 || count >= numberOfRows - 1) direction = !direction;
    direction ? count++ : count--;
  }
  return arr.join("");
}
console.log(solution());
