const nestedList = ["Item", ["Item2", ["Item3"]]];
function parseArray(arr, elem=null) {
  let parentElem = elem || document.querySelector('#field')
  let ul = document.createElement('ul')
  parentElem.append(ul)
  arr.forEach(elem => {
    if (elem instanceof Array) {
      parseArray(elem, ul)
    } else {
      let li = document.createElement('li')
      li.textContent = elem
      ul.append(li)
    }
  })


}

parseArray(nestedList)
