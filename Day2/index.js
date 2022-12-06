var input = document.body.innerText.split(/[a,b,c,x,y,z\n]/gm);
input.pop();
var newArr = [];

var pointValue = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
  Loss: 0,
  Draw: 3,
  Win: 6
};
var score = 0;

for (var x = 0; x < input.length; x++) {
  newArr.push(input[x].split(" "));
}
for (var y = 0; y < newArr.length; y++) {
  if (newArr[y][0] === "A" && newArr[y][1] === "X") {
    //opponent plays Rock and user needs to loose
    //User plays Scissors
    score += pointValue.Loss + pointValue.Scissors;
  } else if (newArr[y][0] === "A" && newArr[y][1] === "Y") {
    //opponent plays Rock and user needs to tie
    //User plays Rock
    score += pointValue.Draw + pointValue.Rock;
  } else if (newArr[y][0] === "A" && newArr[y][1] === "Z") {
    //opponent plays Rock and user needs to Win
    //User plays Paper
    score += pointValue.Win + pointValue.Paper;
  } else if (newArr[y][0] === "B" && newArr[y][1] === "X") {
    //opponent plays Paper and user needs to loose
    //User plays Rock
    score += pointValue.Loss + pointValue.Rock;
  } else if (newArr[y][0] === "B" && newArr[y][1] === "Y") {
    //opponent plays Paper and user needs to tie
    //User plays Paper
    score += pointValue.Draw + pointValue.Paper;
  } else if (newArr[y][0] === "B" && newArr[y][1] === "Z") {
    //opponent plays Paper and user needs to Win
    //User plays Scissors
    score += pointValue.Win + pointValue.Scissors;
  } else if (newArr[y][0] === "C" && newArr[y][1] === "X") {
    //opponent plays Scissors and user needs to loose
    //User plays Paper
    score += pointValue.Loss + pointValue.Paper;
  } else if (newArr[y][0] === "C" && newArr[y][1] === "Y") {
    //opponent plays Scissors and user needs to tie
    //User plays Scissors
    score += pointValue.Draw + pointValue.Scissors;
  } else if (newArr[y][0] === "C" && newArr[y][1] === "Z") {
    //opponent plays Scissors and user needs to Win
    //User plays Rock
    score += pointValue.Win + pointValue.Rock;
  }
}

console.log(score)
