const mainContainer = document.getElementById('main-container');
document.getElementById('event-create').addEventListener('click', function () {
    const newCmt = document.getElementById('add-cmt');
    const includeCmt = newCmt.value;
    const p = document.createElement('p');
    mainContainer.appendChild(p);
    p.innerText = includeCmt;
    newCmt.value = ''



})
