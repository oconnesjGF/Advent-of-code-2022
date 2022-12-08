var input = document.body.innerText
  .replace(/[^a-z,A-Z\n]/gm, "")
  .replace(/$\b/gm, "")
  .split(/[^a-z,A-Z]/gm);
input.pop();

var pValue = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52
};

var newArr = [];
var sum = 0;

/*
//First Part Logic 
for (var a = 0; a < input.length; a++) {
  newArr.push([
    input[a].slice(0, input[a].length / 2).split(""),
    input[a].slice(input[a].length / 2).split("")
  ]);
}
console.log(newArr)

for (var x = 0; x < newArr.length; x++) {
  var value = newArr[x][0].filter((element) => newArr[x][1].includes(element));
  console.log(value)
  //sum += pValue[value[0]];
}
*/
//first loop push every 3 lines into a nested array 
for (var x = 0; x < input.length; x++) {
  if (x % 3 === 0) {
    newArr.push(input.slice(x, x + 3));
  }
}

//first loop sorts the nested arrays from largest to smallest
//Sorting is left over logic from an earlier attempt at the problem 
//The s loop also splits each letter into its own nested array
for (var y = 0; y < newArr.length; y++) {
  //console.log(newArr[y])
  NewArr[y].sort((b, a) => a.length - b.length);
  //console.log(newArr[y])
  for (var w = 0; w < newArr[y].length; w++) {
    newArr[y][w] = newArr[y][w].split("");
  }
}
//last loop first filters the common values from [0][1] positions in the array
// then it looks for the common value from the update value array and newarray[2]
for (var a = 0; a < newArr.length; a++) {
  var value = newArr[a][0].filter((element) => newArr[a][1].includes(element));
  value = value.filter((element) => newArr[a][2].includes(element));
  sum += pValue[value[0]];
}

console.log(sum);
