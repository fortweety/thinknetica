const Shipyard = function() {
}

Shipyard.prototype.paint = function(boats, color) {
  for(let i = 0; i < boats.length; i++) {
    boats[i].color = color;
  }
}

Shipyard.prototype.change = function(boat, correctType) {
  console.log(boat.type)
  if (boat.type == correctType) {
    console.log('boat was changed');
  } else {
    console.log('wrong boat type change');
  }
}

Shipyard.prototype.repair = function(boat, correctType) {
  console.log(boat.type)
  if (boat.type == correctType) {
    console.log('boat was repair');
  } else {
    console.log('wrong boat type repair');
  }
}

Shipyard.prototype.createBoat = function(type, p1, p2) {
  if (type == 'motor') {
    let obj = new MotorBoat(p1, p2)
    obj.type = type
    return obj
  } else if (type == 'sail') {
    let obj = new SailBoat(p1, p2)
    obj.type = type
    return obj
  } else {
    console.log('wrong boat type')
  }
}

const MotorShipyard = function() {
}

MotorShipyard.prototype = new Shipyard();

MotorShipyard.prototype.change = function(boat){
  return Shipyard.prototype.change.call(this, boat, 'motor')
}

MotorShipyard.prototype.repair = function(boat){
  return Shipyard.prototype.repair.call(this, boat, 'motor')
}

MotorShipyard.prototype.createBoat = function(type, param1, param2){
  return Shipyard.prototype.createBoat.call(this, type, param1, param2)
}

const SailShipyard = function() {
}

SailShipyard.prototype = new Shipyard();

SailShipyard.prototype.change = function(boat){
  return Shipyard.prototype.change.call(this, boat, 'sail')
}

SailShipyard.prototype.repair = function(boat){
  return Shipyard.prototype.repair.call(this, boat, 'sail')
}

SailShipyard.prototype.createBoat = function(type, param1, param2){
  return Shipyard.prototype.createBoat.call(this, type, param1, param2)
}

const Boat = function(type, color) {
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

MotorBoat.prototype = new Boat();
SailBoat.prototype = new Boat();

const sailShips = new SailShipyard();
const boat1 = sailShips.createBoat('sail', '2', '20')
console.log(boat1)
boat1.color = 'green'
console.log(boat1.color)
console.log(sailShips.repair(boat1))
console.log(sailShips.change(boat1))


const motorShips = new MotorShipyard();
const boat2 = motorShips.createBoat('motor', '400', 'steal')
console.log(boat2)
boat2.color = 'gray'
console.log(boat2.color)
console.log(motorShips.repair(boat2))
console.log(motorShips.change(boat2))
console.log(sailShips.paint([boat1, boat2], 'yellow'))
console.log(boat1.color)
console.log(boat2.color)
