function parseTemplate(obj, params) {
  let nodesAttrs = []
  let childrens = obj.querySelectorAll('[data-field]')
  console.log(childrens)
  for(let j = 0; j < childrens.length; j++ ) {
    nodesAttrs.push(childrens[j].getAttribute('data-field'))
  }
  console.log(nodesAttrs)
  for(let e = 0; e < nodesAttrs.length; e++) {
    Object.keys(params).includes(nodesAttrs[e]) ? obj.querySelector('[data-field=' + nodesAttrs[e] + ']').textContent = params[nodesAttrs[e]] : alert('No value for ' + nodesAttrs[e])
  }
}

parseTemplate(
  document.getElementById("item1"),
  {
    title: 'Hello world',
    description: 'The first program'
  }
);
