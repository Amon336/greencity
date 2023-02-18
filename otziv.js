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

let fio;
let comment;
const newcomment_ = document.getElementById('newcomment_')
let row = document.getElementById('row');

newcomment_.addEventListener('click', () => {
    comment = document.getElementById('comment').value;
    fio = document.getElementById('fio').value;
    if (fio != '' && comment != '') {
        row.innerHTML += `<div class="comment">
                        <h1>` + fio + `</h1>
                        <p>` + comment + `</p>
                    </div>`
    }
});