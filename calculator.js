// substract это вычитание, но исходя из того что 2 кейс должен проходить, умножение тоже добавил в дефолт

function Calc() {
  let memory = [];

  this.previousValue = null;
  this.currentValue = null;
  this.operationValue = null;

  this.valuesNulling = () => {
    this.previousValue = null;
    this.currentValue = null;
    this.operationValue = null;
  }

  this.generateNumbersAndOperations = () => {
    let startArr = []
    const buttons = document.querySelector('.buttons')
    for(let i = 0; i < 10; i++) {
      startArr.push(i);
    }
    for(let j = 0; j < Object.keys(this.operations).length; j++) {
      startArr.push(Object.keys(this.operations)[j])
    }
    for(let e = 0; e < startArr.length; e++) {
      this.createSpan(buttons, startArr[e])
    }
  }

  this.createSpan = (buttons, text) => {
    let button = document.createElement('span')
    button.innerText = text;
    buttons.append(button);
  }

  this.operations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
    '=': ''
  }

  this.showResult = (result) => {
    document.querySelector('.result').innerText = result.toString();
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
    let history = document.querySelector('.history')
    for(let i =0; i < memory.length; i++) {
      let span = document.createElement('span')
      span.innerText = memory[i].operation
      history.append(span)
    }
    return memory;
  }

  this.clearHistory = () => {
    memory = [];
  }
}

const calculator = new Calc()
calculator.generateNumbersAndOperations()
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', event => {
  switch (event.target.innerText) {
    case 'c':
      calculator.valuesNulling();
      break;
    case '=':
      let operationString = calculator.previousValue + ' '+ calculator.operationValue + ' ' + calculator.currentValue
      let result = calculator.operation(operationString)
      calculator.showResult(result);
      break;
    default:
      if (Number.isInteger(+event.target.innerText)) {
        calculator.currentValue = calculator.currentValue === null ? event.target.innerText : calculator.currentValue + event.target.innerText
        calculator.showResult(calculator.currentValue);
      } else if (Object.keys(calculator.operations).includes(event.target.innerText)) {
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = null;
        calculator.operationValue = event.target.innerText;
        calculator.showResult(event.target.innerText);
      } else {
        console.log('Wrong type')
      }
  }
})

document.addEventListener('keypress', btn => {
  if (btn.key == "Enter") {
    let operationString = calculator.previousValue + ' '+ calculator.operationValue + ' ' + calculator.currentValue
    let result = calculator.operation(operationString)
    calculator.showResult(result);
  }
})

document.addEventListener('keydown', btn => {
  if (btn.keyCode == 8) {
    if (calculator.currentValue != null && calculator.currentValue.length > 0) {
       calculator.currentValue = calculator.currentValue.slice(0, -1);
       document.querySelector('.result').innerText = calculator.currentValue
    }
 }
})

document.querySelector('#addOne').addEventListener('click', e => {
  e.preventDefault();
  let symbol = document.querySelector('#symbol').value
  let func = document.querySelector('#function').value
  if (symbol != null && symbol.length > 0 && func != null && func.length > 0 ) {
    calculator.addOperation(symbol, eval(func))
    console.log(buttons.children)
    buttons.innerHTML = ''
    calculator.generateNumbersAndOperations()
    symbol.innerText = ''
    func.innerText = ''
  } else {
    alert('add value to add operation inputs')
  }
})
