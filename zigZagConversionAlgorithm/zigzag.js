function solution(string = "PAYPALISHIRING", numberOfRows = 4) {
  var currentRow = 0;

  var goDown = true;

  zigZagArray = [];

  for (var i = 0; i < string.length; i++) {
    zigZagArray[currentRow] = string[i];

    if (goDown) {
      currentRow = currentRow + 1;
      if (currentRow > numberOfRows) {
        currentRow -= 1;
        goDown = false;
      }
    } else {
      currentRow -= 1;
      if (currentRow < 1) currentRow = 2;
      goDown = true;
    }
  }
  return zigZagArray;
}
console.log(solution());
