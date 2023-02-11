
//where to add
const plaCes = document.getElementById('places');

//what to add
const li = document.createElement('li');
li.innerText = 'coxs bazar';

//add
plaCes.appendChild(li)

//------------------------------------------------------------

const maincontainer = document.getElementById('main-container');
const newSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'food to try';
newSection.appendChild(h1);
const ul = document.createElement('ul');
newSection.appendChild(ul);
const li1 = document.createElement('li');
li1.innerText = 'sutki';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'lobstar';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'rupchada';
ul.appendChild(li3)


maincontainer.appendChild(newSection);
