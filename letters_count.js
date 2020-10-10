function lettersCount(word) {
  return word.replace(/\s+/g, '').length;
}

console.log(lettersCount("hello"))
console.log(lettersCount("hello world"))
