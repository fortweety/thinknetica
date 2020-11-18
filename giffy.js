const API_KEY = 'xdaKKabIWbJO2AziZMKBN99zyAe9n10K'


const getGifUrl = q => {
   return `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${API_KEY}`;
}



const memoryCacher = function() {
  this.memory = {}

  this.addToMemory = function(request, result) {
    this.memory[request] = result
  }

  this.hasQueryKey = function(q) {
    return this.memory.hasOwnProperty(q)
  }

  this.returnResultFromMemory = function(request) {
    return this.memory[request]
  }
}


const memory = new memoryCacher();
const ApiCall = (url) => {
  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('load', e=> {
      const response = e.target;

      if (response.status === 200) {
        try {
          const parsedResult = JSON.parse(response.response);
          return resolve(parsedResult)
        } catch (e){
          return reject(e);
        }
      } else {
        reject(
          new Error(
            `some error: ${response.status} === ${response.statusText}`
          )
        );
      }
    });


    setTimeout(function() {
    request.open('get', url);
    request.send();
    }, 500);
  })
}


const inputGifyFinder = document.querySelector('#searchfield');
inputGifyFinder.addEventListener('change', function() {

    if (memory.hasQueryKey(this.value)) {
      console.log(memory.returnResultFromMemory(this.value))
    } else {
      fetch(ApiCall(getGifUrl(this.value))
      .then(res => {
      memory.addToMemory(this.value, res);
      return res
      })
      .then(res =>console.log(res)))
    }
    console.log(memory.memory)
})
