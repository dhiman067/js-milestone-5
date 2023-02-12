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
    const getTotalCurrentBalance = getCurrentBalance + getAmountOfDeposit
    currentBalance.innerText = getTotalCurrentBalance;




})