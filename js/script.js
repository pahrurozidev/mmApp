const input = document.querySelector('input[name=uang]');
const jmlhTab = document.querySelector('.tabungan p span');
const buttonTabung = document.getElementById('tabung');
const buttonTarik = document.getElementById('tarik');

const MONEY_STORAGE = 'MONEY_STORAGE';
let money = {};

if (moneyFromLocal = localStorage.getItem(MONEY_STORAGE)) {
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
        const userValue = jmlhTab.textContent.replace(/\./g, "");
        const userInput = Number(input.value);

        if (userInput == 0) {
            alert('angka tidak boleh kosong !');
        } else {
            const result = (Number(userValue) + userInput);
            localStorage.setItem(MONEY_STORAGE, JSON.stringify(result));
            window.location.reload();
        }
    }

    input.value = '';
}


function tarik() {
    if (input.value) {
        const userValue = jmlhTab.textContent.replace(/\./g, "");
        const userInput = Number(input.value);

        if (userInput > userValue) {
            alert('Jumlah tabungan anda kurang !');
        } else {
            const result = (Number(userValue) - userInput);
            localStorage.setItem(MONEY_STORAGE, JSON.stringify(result));
            window.location.reload();
        }
    }

    input.value = '';
}


buttonTabung.addEventListener('click', el => {
    add();
})

buttonTarik.addEventListener('click', () => {
    tarik();
})