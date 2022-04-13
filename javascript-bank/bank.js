/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.balance = newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    var number = this.nextAccountNumber - 1;
    return number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (let i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (let i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  if (Number.isInteger(total) && total > 0) {
    return total;
  } else if (total === 0) {
    return 0;
  } else if (total < 0) {
    return -Math.abs(total);
  }
};
