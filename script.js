'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

const openModel = function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const CloseModel = function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModel.length; i++)
    btnOpenModel[i].addEventListener('click', openModel);

btnCloseModel.addEventListener('click', CloseModel);
overlay.addEventListener('click', CloseModel);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !model.classList.contains('hidden')) {
        CloseModel();
    }
});