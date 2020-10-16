const Square = function(length) {
  this.width = this.height = length
  this.perimeter = function() {
    return 2*(this.width+this.height);
  }
  this.area = function() {
    return this.width * this.height;
  }
}

const Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype = new Square();

let square = new Square(5,5);
let rectangle = new Rectangle(5, 8);

console.log(rectangle.__proto__)

console.log(square.perimeter())
console.log(square.area())

console.log(rectangle.width)
console.log(rectangle.height)

console.log(rectangle.perimeter())
console.log(rectangle.area())
