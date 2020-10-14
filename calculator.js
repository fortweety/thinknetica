// substract это вычитание, но исходя из того что 2 кейс должен проходить, умножение тоже добавил в дефолт

function Calc() {
  let memory = [];

  this.operations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b
  }

  this.addOperation = (symbol, func) => {
    this.operations[symbol] = func
  }

  this.operation = (str) => {
    let split = str.split(' ');
    let a = +split[0];
    let b = +split[2];
    let symbol = split[1];

    if (!this.operations[symbol] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    memory.push({operation: symbol, operands: [a, b]})
    return this.operations[symbol](a,b);
  }

  this.history = () => {
    return memory;
  }

  this.clearHistory = () => {
    memory = [];
  }
}

const calculator = new Calc()


console.log(calculator.operation('31 + 32'))
console.log(calculator.operation('10 * 2'))
calculator.addOperation('/', (a, b) => a / b)
console.log(calculator.operation('10 / 2'))
console.log(calculator.history())
calculator.clearHistory()
console.log(calculator.history())
