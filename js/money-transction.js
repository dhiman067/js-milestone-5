document.getElementById('deposit-btn').addEventListener('click', function () {
    const amountToDeposit = document.getElementById('amount-to-deposit');
    const getAmountOfDepositstring = amountToDeposit.value;
    amountToDeposit.value = '';
    const getAmountOfDeposit = parseFloat(getAmountOfDepositstring);
    const previousDeposit = document.getElementById('previous-deposit');
    const getPreviousDepositstring = previousDeposit.innerText;
    const getpreviousDeposit = parseFloat(getPreviousDepositstring);

    const getTotalDeposit = getAmountOfDeposit + getpreviousDeposit;

    previousDeposit.innerText = getTotalDeposit;


    const currentBalance = document.getElementById('current-balance');
    const currentBalanceString = currentBalance.innerText;
    const getCurrentBalance = parseFloat(currentBalanceString);
    const getTotalCurrentBalanceAfterDeposit = getCurrentBalance + getAmountOfDeposit
    currentBalance.innerText = getTotalCurrentBalanceAfterDeposit;

})

// -----------------------------------------------------//

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const amountOfWithdraw = document.getElementById('amount-of-withdraw');
    const getAmountOfWithdrawString = amountOfWithdraw.value;
    amountOfWithdraw.value = '';
    const getAmountOfWithdraw = parseFloat(getAmountOfWithdrawString);
    const previousWithdraw = document.getElementById('previous-withdraw');
    const getPreviousWithdrawString = previousWithdraw.innerText;
    const getPreviousWithdraw = parseFloat(getPreviousWithdrawString);

    const currentWithdrawAmount = getAmountOfWithdraw + getPreviousWithdraw;
    previousWithdraw.innerText = currentWithdrawAmount;


    const currentBalance = document.getElementById('current-balance');
    const currentBalanceString = currentBalance.innerText;
    const getCurrentBalance = parseFloat(currentBalanceString);
    const getTotalCurrentBalanceAfterWithdraw = getCurrentBalance - getAmountOfWithdraw;
    currentBalance.innerText = getTotalCurrentBalanceAfterWithdraw;

})