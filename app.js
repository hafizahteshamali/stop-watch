let display = document.querySelector('#display');
    let count = 0;
    let functionRun;
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let resetBtn = document.getElementById('resetBtn');

function watchtimer(){
    count++;
    display.innerText = count;
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled', 'disabled');
}
function startTimer(){
    functionRun = setInterval(watchtimer, 100);
}

function stopTimer(){
    clearInterval(functionRun);
    startBtn.removeAttribute('disabled', 'disabled');
    stopBtn.setAttribute('disabled', 'disabled');
}
function resetTimer(){
    count = 0;
    clearInterval(functionRun);
    display.innerText = count;
}