let input = document.querySelector('.input > textarea');
let result = document.querySelector('.result > textarea');

let languageSetting = document.querySelector('.settings > .language');

let prefixFirst = 'https://link.brawlstars.com/';
let prefixSecond = '/?extlink?action=voucher&code=%26page%3D';

let language = '';

function createLink() {
    if (input.value != '') {
        newInput = input.value.replaceAll(':', "%3A");
        newInput = newInput.replaceAll('/', '%2F');
        newInput = newInput.replaceAll('h', '%68');
        newInput = newInput.replaceAll('t', '%74');
        newInput = newInput.replaceAll('p', '%70');
        newInput = newInput.replaceAll('s', '%73');
        language = languageSetting.value;
        result.innerHTML = prefixFirst + language + prefixSecond + newInput;
    } else {
        result.innerHTML = '';
    }
}

input.onkeyup = () => {
    createLink();
}

languageSetting.onclick = () => {
    createLink();
}