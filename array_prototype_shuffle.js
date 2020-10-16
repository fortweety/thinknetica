const list = [1, 33, 4, 5, 6, 2]
const list2 = []
Array.prototype.shuffle = function() {
  return [].concat(this).sort(() => Math.random() - 0.5);
}

console.log(list.shuffle())
console.log(list2.shuffle())
