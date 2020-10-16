const Human = function(name, lastName, phoneNumber, location) {
  this.name = name;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.location = location;
  this.eat = function() {
    console.log("eating")
  }
  this.sleep = function() {
    console.log('sleeping')
  }
  this.callFriend = function() {
    console.log('calling friend')
  }
}

const Employer = function(position, baseSalary, salaryCurrency, startDate, department) {
  this.position = position;
  this.baseSalary = baseSalary;
  this.salaryCurrency = salaryCurrency;
  this.startDate = startDate;
  this.department = department;
}

const ActingEmployer = function() {
  this.retire = function() {
    console.log("retiring")
  }
  this.startVacation = function() {
    console.log("Chilling")
  }
  this.writeReport = function() {
    console.log('writing report')
  }
  this.organizeMeeting = function() {
    console.log('organize Meeting')
  }
}

const ExEmployer = function(endDate) {
  this.endDate = endDate;
}

Employer.prototype = new Human();
ActingEmployer.prototype = new Employer();
ExEmployer.prototype = new Employer();

const employer = new Employer();
const ex = new ExEmployer();

console.log(Object.getPrototypeOf(employer))
console.log(ex.__proto__)
console.log(ex.__proto__.__proto__)
console.log(ex.sleep())
