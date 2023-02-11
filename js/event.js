//option-1 direct onclick

//option 2 -- final
const makeYelloButton = document.getElementById('make-Yellow');
function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}


//option-3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}


// option 3 another
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function(){
    document.body.style.backgroundColor = 'purple'
}



//option-4
const makeOrangButton = document.getElementById('make-orange');
makeOrangButton.addEventListener('click',makeOrange);
function makeOrange(){
    document.body.style.backgroundColor = 'orange'
}

//option-4 -- we will use this(final)
document.getElementById('make-green').addEventListener('click',function() {
    document.body.style.backgroundColor = 'green'
})
