class TestPromise {
    constructor(main) {
        this.callbacks = [];
        this.state = 'pending';
        this.value = null;

        const resolve = (resolveValue, resType = 'resolve') => {
            if (this.value === null) {
              this.value = resolveValue;
              this.state = 'fulfilled';
              this.addCallbacks();
            }
        };

        const reject = (rejectValue, resType = 'reject') => {
            if (this.value === null) {
              this.value = rejectValue;
              this.state = 'rejected';
              this.addCallbacks();
            }
        }

        main(resolve, reject);
    }

    then(onResolve, onReject) {

        const next = new TestPromise((resolve, reject) => {
          this.callbacks.push(x => this.state == 'fulfilled' ? resolve(onResolve(x)) : reject(onReject(x)))
        })

        return next;
    }

    addCallbacks() {
        this.callbacks.forEach(cb => {
            cb(this.value);
        });
    }
}


const makePizza = (topping, sauce) => {
  const pizzaPromise = new TestPromise((resolve, reject) => {
    setTimeout(() => {
      reject(`${topping} and ${sauce}`)
    }, 700);
    setTimeout(() => {
      resolve(`${topping} villo ${sauce}`)
    }, 600);
  });
  return pizzaPromise
}

const pizza = makePizza('apple', 'juice').then(pizza => {
  console.log('Pizza is ready', pizza);
  return pizza;
})


setTimeout(() => {
  console.log(pizza)
}, 1500);
