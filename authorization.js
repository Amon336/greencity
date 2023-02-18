let password;
let checkpassword;
let checkbtn = document.getElementById('checkbtn');

checkbtn.addEventListener('click', () => {
    password = document.getElementById('password').value;
    checkpassword = document.getElementById('checkpassword').value;
    if (password === 'cevrbtnymuqwerty111' && password == checkpassword) {
        window.location.href = './zakaz.html'
    } else {
        alert('Попытайтесь еще раз')
    }
})