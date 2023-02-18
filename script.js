let menu = document.getElementById('menu');
let xmark = document.getElementById('xmark');
let bars = document.getElementById('bars');
xmark.addEventListener('click', close);
bars.addEventListener('click', show);

function close() {
    menu.style.cssText = 'max-height:0;';
    xmark.style.cssText = 'display:none;';
    bars.style.cssText = 'display:block';
}

function show() {
    menu.style.cssText = 'max-height:500px;';
    xmark.style.cssText = 'display:block';
    bars.style.cssText = 'display:none;'
}

const countbtn = document.getElementById('countbtn');
const price = document.getElementById('price');
let count_;
let counter = 0;

countbtn.addEventListener('click', () => {
    countt(94);
});

function countt(rate) {
    count_ = parseFloat(document.getElementById('count_').value);
    if (!isNaN(count_) && count_ > 0) {
        counter = count_ * rate;
        price.innerText = 'Итого: ' + counter + ' тг';
    } else {
        price.innerText = 'Итого: 0 тг';
    }
}