var startBtn = document.querySelector('#start');
var stopBtn = document.querySelector('#stop');
var resetBtn = document.querySelector('#reset');
var minTxt = document.querySelector('#min');
var secTxt = document.querySelector('#sec');
var msTxt = document.querySelector('#ms');

var timerInterval = null;
var mseconds = 0;

// event listener for start button 
startBtn.addEventListener('click', function () {
    
    if (timerInterval) return;
    
    // time interval is set to 10ms, in order to capture more accurate time interval
    timerInterval = setInterval(function () {
        // total ms
        mseconds = mseconds + 10;
        
        // getting values of ms, secs, mins from total ms
        let msecs = Math.floor((mseconds / 10) % 100);
        let secs = Math.floor((mseconds / 1000) % 60);
        let mins = Math.floor((mseconds / 1000) / 60);
        
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;
        if (msecs < 10) msecs = "0" + msecs;
        
        minTxt.innerHTML = `${mins}`;
        secTxt.innerHTML = `${secs}`;
        msTxt.innerHTML = `${msecs}`;
        
    }, 10);
    
})


// event listener for stop button 
stopBtn.addEventListener('click', function () {
    // clearing interval initiated on start
    clearInterval(timerInterval);
    timerInterval = null;
})


// event listener for reset button 
resetBtn.addEventListener('click', function () {
    // clearing interval initiated on start
    clearInterval(timerInterval);
    timerInterval = null;

    // setting values to default
    mseconds = 0;
    minTxt.innerHTML = '00';
    secTxt.innerHTML = '00';
    msTxt.innerHTML = '00';
})