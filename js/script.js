const input = document.querySelector('input[name=uang]');
const jmlhTab = document.querySelector('.tabungan p span');
const buttonTabung = document.getElementById('tabung');
const buttonTarik = document.getElementById('tarik');
const flashMessage = document.querySelector('.flash-message');

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

        if (userInput <= 0) {
            const p = document.createElement('p');
            p.innerText = "Nomail tidak boleh kosong !";
            flashMessage.appendChild(p);
            flashMessage.classList.add('tabung');
            flashMessage.style.background = 'rgb(233, 86, 86)';
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            const result = (Number(userValue) + userInput);
            localStorage.setItem(MONEY_STORAGE, JSON.stringify(result));
            const p = document.createElement('p');
            p.innerText = "Berhasil Menabung";
            flashMessage.appendChild(p);
            flashMessage.classList.add('tabung');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    input.value = '';
}


function tarik() {
    if (input.value) {
        const userValue = jmlhTab.textContent.replace(/\./g, "");
        const userInput = Number(input.value);

        if (userInput > userValue) {
            const p = document.createElement('p');
            p.innerText = "Jumlah tabungan anda kurang !";
            flashMessage.appendChild(p);
            flashMessage.classList.add('tabung');
            flashMessage.style.background = 'rgb(233, 86, 86)';
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            const result = (Number(userValue) - userInput);
            localStorage.setItem(MONEY_STORAGE, JSON.stringify(result));
            const p = document.createElement('p');
            p.innerText = "Berhasil menarik tabungan";
            flashMessage.appendChild(p);
            flashMessage.classList.add('tabung');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    input.value = '';
}


buttonTabung.addEventListener('click', () => {
    add();
})

buttonTarik.addEventListener('click', () => {
    tarik();
})