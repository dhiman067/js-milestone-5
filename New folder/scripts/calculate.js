


function allInputField(inputid) {
    const inputField = document.getElementById(inputid);
    const inputFieldString = inputField.value;

    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;

}

function getInnerElement(elementid, newElemet) {
    const innerElement = document.getElementById(elementid)
    innerElement.innerText = newElemet;
}
document.getElementById('calculate-btn').addEventListener('click', function () {



    const incomeFieldValue = allInputField('income-field')
    const foodFieldValue = allInputField('food-field')
    const rentFieldValue = allInputField('rent-field')
    const clothesFieldValue = allInputField('clothes-field')

    if (isNaN(incomeFieldValue) || isNaN(foodFieldValue) || isNaN(rentFieldValue) || isNaN(clothesFieldValue)) {
        alert('instert amount in number');
        return;
    }

    const totalExpense = foodFieldValue + rentFieldValue + clothesFieldValue
    
    if(totalExpense>incomeFieldValue){
        alert('spend too much')
        return;
    }

    getInnerElement('total-expanse', totalExpense)

    

    const currentBalanceValue = incomeFieldValue - totalExpense

    getInnerElement('balance', currentBalanceValue)

})

document.getElementById('save-btn').addEventListener('click', function () {
    const saveAmount = allInputField('save-amount')
    
    

    const incomeFieldValue = allInputField('income-field')
    const getSaveAmount = (incomeFieldValue * saveAmount) / 100
    

    const foodFieldValue = allInputField('food-field')
    const rentFieldValue = allInputField('rent-field')
    const clothesFieldValue = allInputField('clothes-field')

    if (isNaN(incomeFieldValue) || isNaN(foodFieldValue) || isNaN(rentFieldValue) || isNaN(clothesFieldValue)|| isNaN(saveAmount)) {
        alert('instert amount in number');
        return;
    }

    getInnerElement('saving-amount-value', getSaveAmount)

    const totalExpense = foodFieldValue + rentFieldValue + clothesFieldValue
    const currentBalanceValue = incomeFieldValue - totalExpense

    const remainingBalanceValue = currentBalanceValue - getSaveAmount;

if(remainingBalanceValue<0){
    alert('cant calculate');
    return;
}

    getInnerElement('remaining-balance', remainingBalanceValue)

})