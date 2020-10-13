function shuffling(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

const arr1 = ['abc', 'dgdf', 'etr']
const arr2 = [7, 9 , 25, 1]

console.log(shuffling(arr1))
console.log(shuffling(arr2))
