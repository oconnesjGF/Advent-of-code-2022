var input = document.body.innerText
  .replace(/[^0-9\n]/gm, "") //elmitates whitespace from begining of lines
  .replace(/$\b/gm, "")
  .split(/^\n/gm);

console.log();
var newArr = [];
var sumArr = [];
const initialValue = 0;

/*the following loop, loops through all the arrays and 
subarrays and converts the string to int
*/
for (var x = 0; x < input.length; x++) {
  newArr.push(input[x].split(/^\b/gm));
  for (var y = 0; y < newArr[x].length; y++) {
    if (parseInt(newArr[x][y]) > 0) {
      if (parseInt(newArr[x][y]) == newArr[x][y]) {
        newArr[x][y] = parseInt(newArr[x][y]);
      }
    }
  }
}
for (var a = 0; a < newArr.length; a++) {
  var sumWithInitial = newArr[a].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  sumArr.push(sumWithInitial);
}
sumArr.sort(function (a, b) {
  return b - a;
});

console.log(sumArr);
//get sum of the top three highest values 
var topThree = sumArr[0] + sumArr[1] + sumArr[2]; 

console.log(topThree)