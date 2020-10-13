const employees = [
    {
     firstName:'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Anderson',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position:'Manager'
    }
]


// Нужно выполнить с ним следующие преобразования:
// 1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

function averageSalary(arr) {
  return arr.map(obj=> obj.salary).reduce((a, b) => a + b, 0) / arr.length
}

console.log(averageSalary(employees))

function sortBySalary(arr) {
  return arr.sort((a, b) => a.salary - b.salary)
}

console.log(sortBySalary(employees))

function salaryFilteredEmployees(arr) {
  return arr.filter(e=> e.salary > 4500 && e.age > 25)
}

console.log(salaryFilteredEmployees(employees))
