obj1 = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
};

obj2 = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: true,
 isAdmin: true
};

obj3 = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: true,
 isAdmin: false
};

obj4 = {
 age: 17,
 paid: true,
 blocked: false,
 badUsername: true,
 isAdmin: true
};

function enable(obj){
  return obj.isAdmin ? (obj.age >= 18 && obj.age <=35) ? true : false : (obj.age >= 18 && obj.age <=35 && !!obj.paid && !obj.blocked && !obj.badUsername) ? true : false
}


console.log(enable(obj1));
console.log(enable(obj2));
console.log(enable(obj3));
console.log(enable(obj4));
