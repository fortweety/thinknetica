// Фигуры:
//
// Все типы фигур: пешка, ладья, слон, конь, король, ферзь
//
// У каждой фигуры есть соответствующие методы и свойства:
// Получить допустимые ходы
// Cодержит свойство своего цвета
// Для пешек присутствует флаг говорящий о том, что пешку можно превратить в любую другую фигуру, кроме короля.
//
// Общие методы и свойства должны быть вынесены в родительский класс единый для всех фигур.
//
//
// Поле
//
// Содержит координаты всех полей и состояние всего поля
// Содержит информацию о расположении всех фигур
//
//
// Игра
//
// Состояние игры: победа белого, победа черного, игра продолжается
//
// Хранит информацию о:
// Список фигур, которые были убиты
// Чей сейчас ход
// Сколько ходов прошло с начала игры
// Всю историю ходов.
//
// Работает следующая функциональность :
// Позволяет выбрать фигуру только в том случае, если цвет фигуры соответствует цвету игрока, который ходит
// Если фигура выбрана, позволяет получить допустимые ходы (обратите внимание, недостаточно просто получить ходы с помощью метода фигуры, нужно также валидировать не выходит ли ход за пределы доски, не совершается ли ход на свою фигуру или сквозь несколько вражеских)
// Позволяет отменить выбор фигуры
// Позволяет сделать ход, при этом убив фигуру которая стоит на финальной клетке (если это вражеская фигура )
// Превратить пешку, которая дошла до последнего поля в фигуру по выбору, потратив ход

class Game {
  constructor() {
    this.started = false;
    this.finished = false;
    this.field = null;
    this.result = 0;
    this.killedFigures = [];
    this.whitePlayerStep = true;
    this.stepsCount = 0;
    this.stepsHistory = {
      white: [],
      black: []
    };
  }

  startGame() {
    this.field = new Field();
    this.field.generateField();
    this.field.updateFieldStatus();
    this.field.figuresCreateAndSetToTable(this);
    this.started = true;
  }


}

class Field {
  constructor() {
    this.tableFields = {
      field : [],
      outside: []
    },
    this.fieldStatus = {},
    this.getedFigure = null;
  }

  generateField () {
    const field = Array.from(Array(120).keys())
    for (let i = 0; i < field.length; i++) {
      if (i < 31 || i > 98) {
        this.tableFields['outside'].push(i);
      } else {
        if ( i % 10 == 0  || Array.from(String(i), Number)[i.toString().length - 1] == 9 ) {
          this.tableFields['outside'].push(i);
        } else {
          this.tableFields['field'].push(i);
        }
      }
    }
    this.updateFieldStatus();
  }

  updateFieldStatus() {
    for(let i = 0; i < this.tableFields['field'].length; i++) {
      this.fieldStatus[this.tableFields['field'][i]] = {empty: true, figure: null, figureIsKing: false}
    }
  }

  displayField() {
    return this.tableFields
  }

  figuresCreateAndSetToTable(game) {
    const startPosition = {
      whiteK: new King(35, true),
      whiteQ: new Queen(34, true),
      whiteE1: new Elephant(33, true),
      whiteE2: new Elephant(36, true),
      whiteR1: new Rook(31, true),
      whiteR2: new Rook(38, true),
      whiteH1: new Horse(32, true),
      whiteH2: new Horse(37, true),
      whiteP1: new Pawn(41 ,true),
      whiteP2: new Pawn(42,true),
      whiteP3: new Pawn(43,true),
      whiteP4: new Pawn(44,true),
      whiteP5: new Pawn(45,true),
      whiteP6: new Pawn(46,true),
      whiteP7: new Pawn(47,true),
      whiteP8: new Pawn(48,true),
      blackK: new King(95, false),
      blackQ: new Queen(94, false),
      blackE1: new Elephant(93, false),
      blackE2: new Elephant(96, false),
      blackR1: new Rook(91, false),
      blackR2: new Rook(98, false),
      blackH1: new Horse(92, false),
      blackH2: new Horse(97, false),
      blackP1: new Pawn(81,false),
      blackP2: new Pawn(82,false),
      blackP3: new Pawn(83,false),
      blackP4: new Pawn(84,false),
      blackP5: new Pawn(85,false),
      blackP6: new Pawn(86,false),
      blackP7: new Pawn(87,false),
      blackP8: new Pawn(88,false)
    }
    for(let i =0; i < Object.keys(startPosition).length; i++) {
      let figure = startPosition[Object.keys(startPosition)[i]]
      console.log(figure)
      this.setFieldWithFigure(figure, figure.position, [], game)
    }
  }

  setFieldWithFigure(figure, cell, avaibleSteps, game) {
    if (game.started) {
      if (avaibleSteps.includes(cell)) {
        if (!this.fieldStatus[cell].empty) {
          let enemyFigure = this.fieldStatus[cell].figure
          game.killedFigures.push(figure)
          enemyFigure.killed = true
          if (game.whitePlayerStep) {
            game.stepsHistory['white'].push({figure: figure, from: figure.position, to: cell})
            game.whitePlayerStep = false
            game.stepsCount++
          } else {
            game.stepsHistory['black'].push({figure: figure, from: figure.position, to: cell})
            game.whitePlayerStep = true
            game.stepsCount++
          }
        } else {
          this.fieldStatus[cell] = {empty: false, figure: figure, figureIsKing: figure instanceof King}
        }
        this.fieldStatus[figure.position] = {empty: true, figure: null, figureIsKing: false}
        figure.position = cell
        if (figure.firstStep) {
          figure.firstStep = false
        }
      }
    } else {
      this.fieldStatus[cell] = {empty: false, figure: figure, figureIsKing: figure instanceof King}
    }
  }

  takeFigure(figure, whitePlayerStep) {
    if (figure.whiteColor == whitePlayerStep) {
      this.getedFigure = figure;
    } else {
      console.log('not ure turn')
    }
  }

  unsetGetedFigure() {
    this.getedFigure = null;
  }
}

class Figure {
  constructor(position,color = true, rank = 6) {
    this.whiteColor = color;
    this.position = position;
    this.rank = rank;
    this.firstStep = true;
    this.avaibleSteps = [];
    this.killed = false;
  }

  static runingViaArray(instanceArray, position, fieldsArray, fieldStatus) {
    const finalArray = []
    for (let i = 0; i < instanceArray.length; i++) {
      if (fieldsArray.includes(position + instanceArray[i]) && fieldStatus[position + instanceArray[i]].empty) {
        finalArray.push(position + instanceArray[i])
      }
    }
    return finalArray
  }

  static runningDiagonal(number, recursNumber, finalArray, fieldsArray, fieldStatus) {
    let nextNumber = number + recursNumber

    if (fieldsArray.includes(nextNumber) && fieldStatus[number].empty) {
        finalArray.push(nextNumber)
        Figure.runningDiagonal(nextNumber, recursNumber, finalArray, fieldsArray, fieldStatus)
    }
  }

  static runningLine(number, recursNumber, finalArray, fieldsArray, counter, fieldStatus) {
    let nextNumber = number + (recursNumber * counter)

    if (fieldsArray.includes(nextNumber) && fieldStatus[number].empty) {
        finalArray.push(nextNumber)
        Figure.runningLine(nextNumber, recursNumber, finalArray, fieldsArray, counter, fieldStatus)
    }
  }

  static runningViaLineArray(instanceArray, position, fieldsArray, fieldStatus) {
      const finalArray = []
      for (let i = 0; i < instanceArray.length; i++) {
        let cell = position + instanceArray[i]
        if (fieldsArray.includes(cell)) {
          Figure.runningLine(cell, instanceArray[i], finalArray, fieldsArray, 1, fieldStatus)
        }
        let verticalCell = position
        if (fieldsArray.includes(verticalCell)) {
          if (fieldsArray.includes(verticalCell + instanceArray[i])) {
            finalArray.push(verticalCell + instanceArray[i])
          }
          Figure.runningLine(verticalCell, instanceArray[i], finalArray, fieldsArray, 10, fieldStatus)
        }
      }
      return finalArray
  }

  static runingViaDiagonalArray(instanceArray, position, fieldsArray, fieldStatus) {
      const finalArray = []
      for (let i = 0; i < instanceArray.length; i++) {
        let cell = position + instanceArray[i]
        if (fieldsArray.includes(cell)) {
          if (fieldsArray.includes(cell)) {
            finalArray.push(cell)
          }
          Figure.runningDiagonal(cell, instanceArray[i], finalArray, fieldsArray, fieldStatus)
        }
      }
      return finalArray
  }

  allStepsForFigureByRank(fieldsArray, fieldStatus) {
    switch (this.rank) {
      case 1:
        const rankOneSteps = [-10, 10, -1, 1, -11, 11, -9, 9]
        return Figure.runingViaArray(rankOneSteps, this.position, fieldsArray, fieldStatus)
        break;
      case 2:
      const rankTwoStepsLine = [1, -1]
      const rankTwoStepsDiagonal = [9, -9, 11, -11]
      let queenResult = Figure.runningViaLineArray(rankTwoStepsLine, this.position, fieldsArray, fieldStatus).concat(Figure.runingViaDiagonalArray(rankTwoStepsDiagonal, this.position, fieldsArray, fieldStatus))
      return queenResult
      break;
      case 3:
        const rankThreeSteps = [1, -1]
        return Figure.runningViaLineArray(rankThreeSteps, this.position, fieldsArray, fieldStatus)
        break
      case 4:
        const rankFourSteps = [9, -9, 11, -11]
        return Figure.runingViaDiagonalArray(rankFourSteps, this.position, fieldsArray, fieldStatus)
        break
      case 5:
        const rankFiveSteps = [8, -8, -12, 12, 19, -19, 21, -21]
        return Figure.runingViaArray(rankFiveSteps, this.position, fieldsArray, fieldStatus)
        break;
      case 6:
          const rankSixSteps = [9, 10, 11]
          if (this.firstStep == true) {
            rankSixSteps.push(20)
          }
          return Figure.runingViaArray(rankSixSteps, this.position, fieldsArray, fieldStatus)
          break;
      default:
        console.log('wrong rank')
    }
  }

  stepsAvaible (fieldsArray, fieldStatus) {
    return this.allStepsForFigureByRank(fieldsArray, fieldStatus)
  }

}

class King extends Figure {
  constructor(position, isWhite) {
    super(position, isWhite, 1)
  }
}

class Elephant extends Figure {
  constructor(position, isWhite) {
    super(position,isWhite, 4)
  }
}

class Horse extends Figure {
  constructor(position,isWhite) {
    super(position, isWhite, 5)
  }
}

class Queen extends Figure {
  constructor(position,isWhite) {
    super(position, isWhite, 2)
  }
}

class Rook extends Figure {
  constructor(position,isWhite) {
    super(position, isWhite, 3)
  }
}

class Pawn extends Figure {
  constructor(position,isWhite) {
    super(position, isWhite, 6)
  }

  changeRank(newRank, game) {
    if ([2,3,4,5].includes(newRank)) {
      this.rank = newRank
      game.whitePlayerStep = !this.whiteColor;
      game.stepsCount ++;
      this.whiteColor ? game.stepsHistory['white'].push({figure: this, method: 'change rank to ' + newRank}) : game.stepsHistory['black'].push({figure: this, method: 'change rank to ' + newRank})
    }
  }
}

const game = new Game();
game.startGame();
console.log(game.field.fieldStatus)
const figureBlack = game.field.fieldStatus['98'].figure
const figureWhite = game.field.fieldStatus['37'].figure
console.log(game.field.takeFigure(figureBlack,game.whitePlayerStep))
console.log(game.field.getedFigure)
console.log(game.field.takeFigure(figureWhite,game.whitePlayerStep))
console.log(game.field.getedFigure)
let setted = game.field.getedFigure
console.log(setted.stepsAvaible(game.field.tableFields['field'], game.field.fieldStatus))
console.log(game.field.getedFigure)
