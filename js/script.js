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
        const userValue = jmlhTab.textContent.replace(/\./g, "");
        const userInput = Number(input.value);

        if (userInput == 0) {
            alert('angka tidak boleh kosong !');
        } else {
            const result = (Number(userValue) + userInput);
            localStorage.setItem(STORAGE_MONEY, JSON.stringify(result));
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
            localStorage.setItem(STORAGE_MONEY, JSON.stringify(result));
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