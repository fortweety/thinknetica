class TestPromise {
    constructor(main) {

        this.callbacks = [];
        this.state = 'pending'

        const resolve = resolveValue => {
            if (this.value === undefined) {
              this.value = resolveValue;
              this.state = 'fulfilled';

              this.addCallbacks();
            }

        };

        const reject = rejectValue => {
            if (this.value === null) {
              this.value = rejectValue;
              this.state = 'rejected';

              this.addCallbacks();
            }

        }

        main(resolve);
    }

    then(cb) {
        const next = new TestPromise(resolve => {
            this.callbacks.push(x => resolve(cb(x)));
        });

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
      resolve(`${topping} and ${sauce}`)
    }, 500);
    setTimeout(() => {
      resolve(`${topping} villo ${sauce}`)
    }, 800);
  });
  return pizzaPromise
}

const pizza = makePizza('apple', 'juice').then(pizza => {
  console.log('Pizza is ready', pizza);
  return pizza
})

console.log(pizza)

setTimeout(() => {
  console.log(pizza)
}, 800);
