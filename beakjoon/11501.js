const fs = require('fs')
const [_, ...input] = fs.readFileSync('./test.txt').toString().trim().split('\n');
const stocks = input.filter((_, i) => i % 2 === 1).map(v => v.split(' ').map(Number));

for (const stock of stocks) {
  let amount = 0;
  let sellingPrice = 0;
  for (let i = stock.length - 1; i >= 0; i--) {
    if (stock[i] > sellingPrice) {
      sellingPrice = stock[i]
    } else if (stock[i] !== sellingPrice) {
      amount += sellingPrice - stock[i]
    }
  }
  console.log(amount)
}


