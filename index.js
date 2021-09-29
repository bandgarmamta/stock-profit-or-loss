var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocksquantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputEl.textContent =
      "You have lost " + loss + " Your loss perscentage is " + lossPercentage + "%";
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputEl.textContent =
      "You have gained " + profit + " Your profit percentage is " + profitPercentage+"%" ;
  } else {
    outputEl.textContent = "No gain no pain";
  }
}
function checkProfitOrLoss() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var cp = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, cp);
}

submitBtn.addEventListener("click", checkProfitOrLoss);