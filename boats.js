const Shipyard = function() {
}

Shipyard.prototype.paint = function(boats, color) {
  for(let i = 0; i < boats.length; i++) {
    boats[i].color = color;
  }
}

Shipyard.prototype.change = function(boat, correctType) {
  if (boat instanceof correctType) {
    console.log('boat was changed');
  } else {
    console.log('wrong boat type change');
  }
}

Shipyard.prototype.repair = function(boat, correctType) {
  if (boat instanceof correctType) {
    console.log('boat was repair');
  } else {
    console.log('wrong boat type repair');
  }
}

Shipyard.prototype.createBoat = function(type, p1, p2) {
  if (type == 'motor') {
    let obj = new MotorBoat(p1, p2)
    return obj
  } else if (type == 'sail') {
    let obj = new SailBoat(p1, p2)
    return obj
  }
}

const MotorShipyard = function() {
}

MotorShipyard.prototype = new Shipyard();

const SailShipyard = function() {
}

SailShipyard.prototype = new Shipyard();

const Boat = function(type, color = 'gray') {
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
console.log(boat1.color)
console.log(sailShips.repair(boat1, SailBoat))
console.log(sailShips.change(boat1, SailBoat))

const motorShips = new MotorShipyard();
const boat2 = motorShips.createBoat('motor', '400', 'steal')
console.log(boat2)
console.log(boat2.type)
console.log(boat2.color)
console.log(motorShips.repair(boat2, MotorBoat))
console.log(motorShips.change(boat2, MotorBoat))
console.log(sailShips.paint([boat1, boat2], 'yellow'))

console.log(boat1.color)
console.log(boat2.color)
