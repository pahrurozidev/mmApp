const input = document.querySelector('input[name=uang]');
const jmlhTab = document.querySelector('.tabungan p span');
const buttonTabung = document.getElementById('tabung');
const buttonTarik = document.getElementById('tarik');
const flashMessage = document.querySelector('.flash-message');
const buttonClose = document.querySelector('.flash-message button');
const svg = document.querySelector('svg');

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

function add(el) {
    if (input.value) {


        if (input.value.match(/^[0-9]+$/)) {
            const userValue = jmlhTab.textContent.replace(/\./g, "");
            const inputStr = input.value.replace(/[^\w\s]/gi, '');
            const userInput = Number(inputStr);

            if (userInput <= 0) {

                const svg = /*html*/ `<svg style="background: red;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="White" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

                flashMessage.insertAdjacentHTML('afterbegin', svg);

                const p = document.createElement('p');
                p.innerText = "Nominal tidak boleh kosong !";
                flashMessage.appendChild(p);
                flashMessage.insertBefore(p, buttonClose);
                flashMessage.classList.add('tabung');

                input.removeAttribute('required');
                el.preventDefault();
                buttonClose.addEventListener('click', () => {
                    window.location.reload();
                })
            } else {
                const result = (Number(userValue) + userInput);
                localStorage.setItem(MONEY_STORAGE, JSON.stringify(result));


                const svg = /*html*/ `<svg style="background: green;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="White" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>`;
                flashMessage.insertAdjacentHTML("afterbegin", svg);

                const p = document.createElement('p');
                p.innerText = "Berhasil Menabung";
                flashMessage.insertBefore(p, buttonClose);
                flashMessage.classList.add('tabung');

                input.removeAttribute('required');
                el.preventDefault();
                buttonClose.addEventListener('click', () => {
                    window.location.reload();
                })
            }
        } else {
            const svg = /*html*/ `<svg style="background: red;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="White" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

            flashMessage.insertAdjacentHTML('afterbegin', svg);

            const p = document.createElement('p');
            p.innerText = "Masukan inputan angka !";
            flashMessage.insertBefore(p, buttonClose);
            flashMessage.classList.add('tabung');

            input.removeAttribute('required');
            el.preventDefault();
            buttonClose.addEventListener('click', () => {
                window.location.reload();
            });
        }
    }

    input.value = '';
}


function tarik(el) {
    if (input.value) {

        if (input.value.match(/^[0-9]+$/)) {

            const userValue = jmlhTab.textContent.replace(/\./g, "");
            const inputStr = input.value.replace(/[^\w\s]/gi, '');
            const userInput = Number(inputStr);

            if (userInput > userValue) {
                const svg = /*html*/ `<svg style="background: red;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="White" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

                // svg.style.background = 'red';
                flashMessage.insertAdjacentHTML('afterbegin', svg);

                const p = document.createElement('p');
                p.innerText = "Jumlah tabungan anda kurang !";
                flashMessage.insertBefore(p, buttonClose);
                flashMessage.classList.add('tabung');

                input.removeAttribute('required');
                el.preventDefault();
                buttonClose.addEventListener('click', () => {
                    window.location.reload();
                })
            } else if (userInput <= 0) {
                const svg = /*html*/ `<svg style="background: red;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="White" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

                flashMessage.insertAdjacentHTML('afterbegin', svg);

                const p = document.createElement('p');
                p.innerText = "Nominal tidak boleh kosong !";
                flashMessage.appendChild(p);
                flashMessage.insertBefore(p, buttonClose);
                flashMessage.classList.add('tabung');

                input.removeAttribute('required');
                el.preventDefault();
                buttonClose.addEventListener('click', () => {
                    window.location.reload();
                })
            } else {
                const result = (Number(userValue) - userInput);
                localStorage.setItem(MONEY_STORAGE, JSON.stringify(result));

                const svg = /*html*/ `<svg style="background: green;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="White" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>`;
                flashMessage.insertAdjacentHTML("afterbegin", svg);

                const p = document.createElement('p');
                p.innerText = "Berhasil menarik tabungan";
                flashMessage.insertBefore(p, buttonClose);
                flashMessage.classList.add('tabung');

                input.removeAttribute('required');
                el.preventDefault();
                buttonClose.addEventListener('click', () => {
                    window.location.reload();
                })
            }
        } else {
            const svg = /*html*/ `<svg style="background: red;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="White" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

            // svg.style.background = 'red';
            flashMessage.insertAdjacentHTML('afterbegin', svg);

            const p = document.createElement('p');
            p.innerText = "Masukan inputan angka !";
            flashMessage.insertBefore(p, buttonClose);
            flashMessage.classList.add('tabung');

            input.removeAttribute('required');
            el.preventDefault();
            buttonClose.addEventListener('click', () => {
                window.location.reload();
            })
        }
    }

    input.value = '';
}


buttonTabung.addEventListener('click', el => {
    add(el);
})

buttonTarik.addEventListener('click', el => {
    tarik(el);
})