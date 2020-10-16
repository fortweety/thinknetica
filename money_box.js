const MoneyBox = function() {
  var coins = 0
  this.addCoin = () => {
    coins++;
  }
  this.getAmount = () => {
    console.log(coins)
  }
}

const box = new MoneyBox();
box.getAmount(); // 0
box.addCoin();
box.addCoin();
box.getAmount(); // 2
box.coins = 10
box.getAmount(); // 2
