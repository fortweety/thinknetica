function exponentiation(a, b, memo) {
  let result = a**b;
  memo[a] = {[b] : result};
  return { value: result, fromCache: false }
}

const cache = () => {
  let memory = {};
  return (a,b) => {
    if (Object.keys(memory).includes(a.toString())) {
      if (Object.keys(memory[a.toString()]).includes(b.toString()) ){
        return { value: memory[a][b], fromCache: true }
      } else {
        return exponentiation(a, b, memory);
      }
    } else {
      return exponentiation(a, b, memory);
    }
  }
}

const calculate = cache();

console.log(calculate(3, 3)) // { value: 27, fromCache: false}
console.log(calculate(2, 10)) // { value: 1024, fromCache: false}
console.log(calculate(2, 10)) // { value: 1024, fromCache: true}
