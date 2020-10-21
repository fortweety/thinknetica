const Shipyard = function() {
}

Shipyard.prototype.paint = function(boats, color) {
  for(let i = 0; i < boats.length; i++) {
    boats[i].color = color;
  }
}

Shipyard.prototype.change = function(boat, correctType) {
<<<<<<< HEAD
=======
  console.log(boat.type)
>>>>>>> 47bc6a8a254c1a000dcd68ef419cf4f07e25add3
  if (boat instanceof correctType) {
    console.log('boat was changed');
  } else {
    console.log('wrong boat type change');
  }
}

Shipyard.prototype.repair = function(boat, correctType) {
<<<<<<< HEAD
=======
  console.log(boat.type)
>>>>>>> 47bc6a8a254c1a000dcd68ef419cf4f07e25add3
  if (boat instanceof correctType) {
    console.log('boat was repair');
  } else {
    console.log('wrong boat type repair');
  }
}

<<<<<<< HEAD
Shipyard.prototype.createBoat = function(type, p1, p2) {
  if (type == 'motor') {
    let obj = new MotorBoat(p1, p2)
    return obj
  } else if (type == 'sail') {
    let obj = new SailBoat(p1, p2)
=======
Shipyard.prototype.createBoat = function(type, correctType, inst, p1, p2) {
  if (type == correctType) {
    let obj = new inst(p1, p2)
>>>>>>> 47bc6a8a254c1a000dcd68ef419cf4f07e25add3
    return obj
  }
}

const MotorShipyard = function() {
}

MotorShipyard.prototype = new Shipyard();

<<<<<<< HEAD
=======
MotorShipyard.prototype.change = function(boat){
  return Shipyard.prototype.change.call(this, boat, MotorBoat)
}

MotorShipyard.prototype.repair = function(boat){
  return Shipyard.prototype.repair.call(this, boat, MotorBoat)
}

MotorShipyard.prototype.createBoat = function(type, param1, param2){
  return Shipyard.prototype.createBoat.call(this, type, 'motor', MotorBoat, param1, param2)
}

>>>>>>> 47bc6a8a254c1a000dcd68ef419cf4f07e25add3
const SailShipyard = function() {
}

SailShipyard.prototype = new Shipyard();

<<<<<<< HEAD
const Boat = function(type, color = 'gray') {
=======
SailShipyard.prototype.change = function(boat){
  return Shipyard.prototype.change.call(this, boat, SailBoat)
}

SailShipyard.prototype.repair = function(boat){
  return Shipyard.prototype.repair.call(this, boat, SailBoat)
}

SailShipyard.prototype.createBoat = function(type, param1, param2){
  return Shipyard.prototype.createBoat.call(this, type, 'sail', SailBoat, param1, param2)
}

const Boat = function(type, color) {
>>>>>>> 47bc6a8a254c1a000dcd68ef419cf4f07e25add3
  this.type = type;
  this.color = color;
}

const MotorBoat = function(enginePower, materialBody) {
  this.enginePower = enginePower;
  this.materialBody = materialBody;
}

const SailBoat = function(numberOfMasts, totalSailArea) {
  this.numberOfMasts = numberOfMasts;
  this.totalSailArea = totalSailArea;
}

MotorBoat.prototype = new Boat('motor');
SailBoat.prototype = new Boat('sail');

const sailShips = new SailShipyard();
const boat1 = sailShips.createBoat('sail', '2', '20')
console.log(boat1)
console.log(boat1.type)
<<<<<<< HEAD
console.log(boat1.color)
console.log(sailShips.repair(boat1, SailBoat))
console.log(sailShips.change(boat1, SailBoat))
=======
boat1.color = 'green'
console.log(boat1.color)
console.log(sailShips.repair(boat1))
console.log(sailShips.change(boat1))

>>>>>>> 47bc6a8a254c1a000dcd68ef419cf4f07e25add3

const motorShips = new MotorShipyard();
const boat2 = motorShips.createBoat('motor', '400', 'steal')
console.log(boat2)
console.log(boat2.type)
<<<<<<< HEAD
console.log(boat2.color)
console.log(motorShips.repair(boat2, MotorBoat))
console.log(motorShips.change(boat2, MotorBoat))
console.log(sailShips.paint([boat1, boat2], 'yellow'))

=======
boat2.color = 'gray'
console.log(boat2.color)
console.log(motorShips.repair(boat2))
console.log(motorShips.change(boat2))
console.log(sailShips.paint([boat1, boat2], 'yellow'))
>>>>>>> 47bc6a8a254c1a000dcd68ef419cf4f07e25add3
console.log(boat1.color)
console.log(boat2.color)
