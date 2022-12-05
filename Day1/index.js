var input = document.body.innerText
  .replace(/[^0-9\n]/gm, "") //elmitates whitespace from begining of lines
  .replace(/$\b/gm, "")
  .split(/^\n/gm);

//console.log(input[0].split(/^\b/gm));
var newArr = [];
var sum = 0;
var test = [];
for (var x = 0; x < input.length; x++) {
  newArr.push(input[x].split(/^\b/gm));
  //console.log(newArr[x])
  for (var y = 0; y < newArr[x].length; y++) {
    if (parseInt(newArr[x][y]) > 0) {
      console.log(parseInt(newArr[x][y]));
    }
  }
}

/*
for(var y = 0; y < newArr.length; y++) {
  //console.log(parseInt(newArr[0][y]))
  if(parseInt(newArr[0][y]) > 0){
    //console.log('true')
    sum += parseInt(newArr[0][y])
  }
  }

  console.log(sum);
*/
