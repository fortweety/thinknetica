function filterByLength(arr, from, to) {
  return arr.filter(e=> e.length >= from && e.length <= to)
}

const fruits = ['orange', 'apple', 'banana', ''];

console.log(filterByLength(fruits, 0,5))
console.log(filterByLength(fruits, 3,7))
console.log(filterByLength(fruits, 9,2))
