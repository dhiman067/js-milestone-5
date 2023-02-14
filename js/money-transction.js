
//step-1------
document.getElementById('deposit-btn').addEventListener('click', function () {
   
//    step-2----
    const amountToDeposit = document.getElementById('amount-to-deposit');
    const getAmountOfDepositstring = amountToDeposit.value;
    amountToDeposit.value = '';
    const getAmountOfDeposit = parseFloat(getAmountOfDepositstring);
    if(isNaN(getAmountOfDeposit)){
        alert('instrt amount in number');
        return;
    }

    //step-3-----
    const previousDeposit = document.getElementById('previous-deposit');
    const getPreviousDepositstring = previousDeposit.innerText;
    const getpreviousDeposit = parseFloat(getPreviousDepositstring);

    //step-4-------
    const getTotalDeposit = getAmountOfDeposit + getpreviousDeposit;
    previousDeposit.innerText = getTotalDeposit;

// step-5------
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceString = currentBalance.innerText;
    const getCurrentBalance = parseFloat(currentBalanceString);

    // step-6-----
    const getTotalCurrentBalanceAfterDeposit = getCurrentBalance + getAmountOfDeposit
    currentBalance.innerText = getTotalCurrentBalanceAfterDeposit;

})

// -----------------------------------------------------//

//step-7--------
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // step-8--------
    const amountOfWithdraw = document.getElementById('amount-of-withdraw');
    const getAmountOfWithdrawString = amountOfWithdraw.value;
    amountOfWithdraw.value = '';
    const getAmountOfWithdraw = parseFloat(getAmountOfWithdrawString);

    if(isNaN(getAmountOfWithdraw)){
        alert('instert amount in number');
        return;
    }

    //step-9--------
    const previousWithdraw = document.getElementById('previous-withdraw');
    const getPreviousWithdrawString = previousWithdraw.innerText;
    const getPreviousWithdraw = parseFloat(getPreviousWithdrawString);




//step-11-----------
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceString = currentBalance.innerText;
    const getCurrentBalance = parseFloat(currentBalanceString);

    if (getAmountOfWithdraw > getCurrentBalance) {
        alert('ato taka nai');
        return;
    }
// step-10---------
    const currentWithdrawAmount = getAmountOfWithdraw + getPreviousWithdraw;
    previousWithdraw.innerText = currentWithdrawAmount;

//step-12---------------
    const getTotalCurrentBalanceAfterWithdraw = getCurrentBalance - getAmountOfWithdraw;
    currentBalance.innerText = getTotalCurrentBalanceAfterWithdraw;

})