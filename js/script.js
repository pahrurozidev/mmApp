const input = document.querySelector('input[name=uang]');
const jmlhTab = document.querySelector('.tabungan p span');
const buttonTabung = document.getElementById('tabung');
const buttonTarik = document.getElementById('tarik');

const STORAGE_MONEY = 'STORAGE_MONEY';
let money = {};

if (moneyFromLocal = localStorage.getItem(STORAGE_MONEY)) {
    money = JSON.parse(moneyFromLocal);

    const modifNumber = (number) => {
        return number
            .toString()
            .replace(
                /\B(?=(\d{3})+(?!\d))/g, "."
            );
    }

    const moneyMondify = modifNumber(money);

    jmlhTab.innerText = moneyMondify;
}

function add() {
    if (input.value) {
        const result = (Number(jmlhTab.textContent) + Number(input.value));
        localStorage.setItem(STORAGE_MONEY, JSON.stringify(result));
    }

    input.value = '';
}


function tarik() {
    if (input.value) {
        const result = (Number(jmlhTab.textContent) - Number(input.value));
        console.log(result);
        localStorage.setItem(STORAGE_MONEY, JSON.stringify(result));
    }

    input.value = '';
}


buttonTabung.addEventListener('click', el => {
    add();
    window.location.reload();
})

buttonTarik.addEventListener('click', () => {
    tarik();
    window.location.reload();
})