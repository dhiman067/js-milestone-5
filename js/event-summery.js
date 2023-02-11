
function eventHandler() {
    const textChange = document.getElementById('text-change-onclick');
    textChange.innerText ="text change by one click"
}


document.getElementById('text-change-addevent').addEventListener('click',function(){
    const textChange = document.getElementById('text-change-onclick');
    textChange.innerText =" change by add event listener"
})



    document.getElementById('event-listener').addEventListener('click',function(){
        const inputfield = document.getElementById('input-field');
        const inputText = inputfield.value;
        const p =document.getElementById('change-text');
        p.innerText = inputText;
        inputfield.value = '';

    })
