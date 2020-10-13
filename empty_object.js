const emptyObj = Object.create({}, {
  name: {
    value: "Alex",
    writable: true,
    configurable: true
  },
  lastName: {
    value: "Smith",
    configurable: true
  }
})

console.log(emptyObj.name)
console.log(emptyObj.lastName)

emptyObj.name = 'Bob'

console.log(emptyObj.name)

delete emptyObj.name
delete emptyObj.lastName

console.log(emptyObj.name)
console.log(emptyObj.lastName)
