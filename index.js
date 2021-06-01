const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtn = document.querySelector('[data-action=start]');
const stopBtn = document.querySelector('[data-action=stop]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let intervalId;

function onStartBtnClick() {
    if (intervalId) {
        return;
    }
    intervalId = setInterval(() => {
        changeColor(colors);
    }, 1000);
    startBtn.setAttribute('disabled', 'disabled');
}

function onStopBtnClick() {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled');
    intervalId = null;
}

function changeColor(colors) {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[index];
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
