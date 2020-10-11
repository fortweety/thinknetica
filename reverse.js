function reverse(word) {
  reversedArray = [];
  for(var i= word.length -1; i >= 0; i--) {
    reversedArray.push(word[i]);
  }
  return reversedArray.join("");
}

console.log(reverse("Hello"))
console.log(reverse("Hello world"))
