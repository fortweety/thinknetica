const ticketWindow = function() {
  this.bank = 0;
  this.eventList = {};
  this.ticketsHistory = {};

  this.createEvent = (name, cost) => {
    this.eventList[name] = cost;
  }

  this.buyTicket = (name) => {
    if (Object.keys(this.eventList).includes(name)) {
      this.bank += this.eventList[name];
      let id = '123456' // Math.floor(100000 + Math.random() * 900000);
      this.ticketsHistory[id] = name;
      console.log(this.bank)
      console.log(this.ticketsHistory)
      return id
    }
  }

  this.returnTicket = (id) => {
    if (Object.keys(this.ticketsHistory).includes(id)) {
      this.bank -= this.eventList[this.ticketsHistory[id]]
      delete this.ticketsHistory[id]
      console.log(this.ticketsHistory)
      console.log(this.bank)
    }
  }
}

const ticket = new ticketWindow();

console.log(ticket.createEvent('Concert', 500))
console.log(ticket.buyTicket('Concert'))
console.log(ticket.returnTicket('123456'))
