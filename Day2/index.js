var input = document.body.innerText.split(/[a,b,c,x,y,z\n]/gm);
input.pop();
var newArr = [];

var colOne = {
  A: "Rock",
  B: "Paper",
  C: "Scissors"
};

var colTwo = {
  X: "Rock",
  Y: "Paper",
  Z: "Scissors"
};

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
  for (var y = 0; y < Object.keys(colOne).length; y++) {
    if (newArr[x][0] == Object.keys(colOne)[y]) {
      //console.log('true ' + newArr[x][0]+ Object.keys(colOne)[y])
      newArr[x][0] = Object.values(colOne)[y];
    }
    if (newArr[x][1] == Object.keys(colTwo)[y]) {
      newArr[x][1] = Object.values(colTwo)[y];
    }
  }
}
/*
Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. 
If both players choose the same shape, the round instead ends in a draw.
*/

//console.log(pointValue[newArr[0][1]]);
for (var z = 0; z < newArr.length; z++) {
  if (newArr[z][0] === newArr[z][1]) {
    //console.log('draw');
    score += pointValue[newArr[z][1]] + pointValue.Draw;
  } else if (newArr[z][0] === colOne.A && newArr[z][1] === colTwo.Z) {
    //Opponent plays Rock and User plays Scissors
    //Opponent Wins
    score += pointValue[newArr[z][1]] + pointValue.Loss;
  } else if (newArr[z][0] === colOne.A && newArr[z][1] === colTwo.Y) {
    //Opponent plays Rock and User plays Paper
    //User Wins
    score += pointValue[newArr[z][1]] + pointValue.Win;
  } else if (newArr[z][0] === colOne.B && newArr[z][1] === colTwo.X) {
    //Opponent plays Paper and User plays Rock
    //Opponent Wins
    score += pointValue[newArr[z][1]] + pointValue.Loss;
  } else if (newArr[z][0] === colOne.B && newArr[z][1] === colTwo.Z) {
    //Opponent plays Paper and User plays "Scissors"
    //User Wins
    score += pointValue[newArr[z][1]] + pointValue.Win;
  } else if (newArr[z][0] === colOne.C && newArr[z][1] === colTwo.Y) {
    //Opponent plays Scissors and User plays Paper
    //Opponent Wins
    score += pointValue[newArr[z][1]] + pointValue.Loss;
  }
  else if (newArr[z][0] === colOne.C && newArr[z][1] === colTwo.X) {
    //Opponent plays Scissors and User plays Rock
    //User Wins
    score += pointValue[newArr[z][1]] + pointValue.Win;
  }
}

console.log(score)