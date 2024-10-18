let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
let timer = false;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
    recordTimestamp(); // Add timestamp when stopwatch is stopped
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    clearTimestamps(); // Clear all timestamps when reset is clicked
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        
        setTimeout(stopWatch, 10);
    }
}

// Function to record the current timestamp
function recordTimestamp() {
    let hr = document.getElementById('hr').innerText;
    let min = document.getElementById('min').innerText;
    let sec = document.getElementById('sec').innerText;
    let count = document.getElementById('count').innerText;

    let timestamp = `${hr} Hr : ${min} Min : ${sec} Sec : ${count} Count`;
    let timestampList = document.getElementById('timestamp-list');
    let listItem = document.createElement('li');
    listItem.textContent = timestamp;
    timestampList.appendChild(listItem);
}

// Function to clear all timestamps when the reset button is clicked
function clearTimestamps() {
    let timestampList = document.getElementById('timestamp-list');
    timestampList.innerHTML = ''; // Clear all list items
}
