const intialPrice = document.getElementById('intial-price');
const stockQuantity = document.getElementById('stocks-quantity');
const currentPriceEl = document.getElementById('current-price');
const btnCheck = document.getElementById('check');
const messages = document.getElementById('message');
const stock = document.querySelector('.stock');

// functions
const checkStock = function () {
  // console.log('hey');
  if (intialPrice.value && stockQuantity.value && currentPriceEl.value > 0) {
    let buyPrice = parseInt(intialPrice.value);
    let quantity = parseInt(stockQuantity.value);
    let currentPrice = parseInt(currentPriceEl.value);
    calculateProfitLoss(buyPrice, quantity, currentPrice);
  } else {
    alert('Please enter correct stock vlaue');
  }
};

// function to check profit or loss
const calculateProfitLoss = function (buyPrice, quantity, currentPrice) {
  let profitLoss = 0,
    percentageProfitLoss = 0,
    stonks;
    // profit 
  if (buyPrice < currentPrice) {
    profitLoss = (currentPrice - buyPrice) * quantity;
    percentageProfitLoss = (profitLoss * 100) / buyPrice;
    stonks = 'profit';
    stock.style.display = 'block';
    stock.src = `/assets/${stonks}.png`;
    showResult(
      `Hey! you just earned a profit of ${profitLoss} with %${percentageProfitLoss.toFixed(
        2
      )}`,
      'var(--profit)'
    );
    // no profit no loss 
  } else if (buyPrice === currentPrice) {
    showResult(`No Gain or No Loss`, 'profit');
    stock.style.display = 'none';
    // loss 
  } else if (buyPrice > currentPrice) {
    profitLoss = (buyPrice - currentPrice) * quantity;
    percentageProfitLoss = (profitLoss * 100) / buyPrice;
    // more then 50% loss 
    if (percentageProfitLoss > 50) {
      stonks = 'heavyloss';
      stock.style.display = 'block';
      stock.src = `/assets/${stonks}.png`;
      showResult(
        `Hey! you just loss of ${profitLoss} with %${percentageProfitLoss.toFixed(
          2
        )}.`,
        'var(--loss)'
      );
      // less then 50% loss 
    } else {
      stonks = 'loss';
      stock.style.display = 'block';
      stock.src = `/assets/${stonks}.png`;
      showResult(
        `Hey! you just loss of ${profitLoss} with %${percentageProfitLoss.toFixed(
          2
        )}.`,
        'var(--loss)'
      );
    }
  }
};


// function to display message according to output
const showResult = function (message, color) {
  messages.style.visibility = 'visible';
  messages.innerText = message;
  messages.style.color = color;
};

// Event listeners
btnCheck.addEventListener('click', checkStock);
