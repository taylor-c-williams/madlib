const inputOne = document.getElementById('input-1');
const inputTwo = document.getElementById('input-2');
const inputThree = document.getElementById('input-3');
const inputFour = document.getElementById('input-4');
const inputFive = document.getElementById('input-5');
const inputSix = document.getElementById('input-6');
const inputSeven = document.getElementById('input-7');
const inputEight = document.getElementById('input-8');

const spanOne = document.getElementById('word-1')
const spanTwo = document.getElementById('word-2')
const spanThree = document.getElementById('word-3')
const spanFour = document.getElementById('word-4')
const spanFive = document.getElementById('word-5')
const spanSix = document.getElementById('word-6')
const spanSeven = document.getElementById('word-7')
const spanEight = document.getElementById('word-8')

const submit = document.getElementById('submit')
const hideThis = document.getElementById('hidethis')

inputOne.addEventListener('input', () => {
    spanOne.textContent = inputOne.value
});

inputTwo.addEventListener('input', () => {
    spanTwo.textContent = inputTwo.value
});

inputThree.addEventListener('input', () => {
    spanThree.textContent = inputThree.value
});

inputFour.addEventListener('input', () => {
    spanFour.textContent = inputFour.value
});

inputFive.addEventListener('input', () => {
    spanFive.textContent = inputFive.value
});

inputSix.addEventListener('input', () => {
    spanSix.textContent = inputSix.value
});

inputSeven.addEventListener('input', () => {
    spanSeven.textContent = inputSeven.value
});

inputEight.addEventListener('input', () => {
    spanEight.textContent = inputEight.value
});

submit.addEventListener('click', ()=> {
hideThis.style.visibility = "visible";
});