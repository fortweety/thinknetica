function sortDesc(arr) {
  return arr.sort((a, b) => b - a)
}
const numbers = [-20, -10, 0, 10, 20, 30]

console.log(sortDesc(numbers))
