document.getElementById('submit-info').addEventListener('click',function(){
    const emailInfo = document.getElementById('email');
    const getEmailInfo = emailInfo.value;
    const passwordInfo = document.getElementById('password');
    const getPasswordInfo = passwordInfo.value;
    if(getEmailInfo == 'paul119@gmail.com' && getPasswordInfo == '123456'){
        window.location.href='http://127.0.0.1:5500/index-bank.html'
    }
    else{
        alert('email or password is wrong!')
    }
})