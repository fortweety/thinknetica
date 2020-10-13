function checkingArrays(arr1, arr2) {
  for(var i = 0; i < arr1.length; i++ ) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}

function arraysEqual(arr1, arr2) {
  return arr1.length != arr2.length ? false : checkingArrays(arr1, arr2)
}


console.log(arraysEqual(['a', 'b', 'c'], ['a', 'b']))
console.log(arraysEqual(['a', 'd', 'c'], ['a', 'b', 'c']))
console.log(arraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']))
