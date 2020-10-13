const human = Object.create({
  fullName: {
    set: function(value) {
      [this.firstName, this.lastName] = value.split(' ');
    },
    get() {
      return '${this.firstName} ${this.lastName}';
    }
  },
  dateOfBirth: {
    set: function(value) {
      this.dateOfBirth = value;
    }
  },
  get age() {
     return new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear()
 }
})

human.fullName = "Ivan Petrov"

console.log(human.fullName)

human.dateOfBirth = "2011-10-10"
console.log(human.dateOfBirth)
console.log(human.age)
