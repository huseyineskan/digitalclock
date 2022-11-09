const myClock = document.getElementById('clock');
const myHour = document.getElementById('hours');
const myMinute = document.getElementById('minutes');
const mySecond = document.getElementById('seconds');
const myPeriod = document.getElementById('period');

var hour, min, sec;

function myTime(){
    var myDate = new Date();
    var period = "PM";
    
    hour = myDate.getHours(); //get hours
    min = myDate.getMinutes(); //get minute
    sec = myDate.getSeconds(); //get seconds

    // Change the period as AM or PM.
    hour < 12 ? period = "AM" : period = period;
    myPeriod.textContent = period;

    // add 0 to the left of the number. 
    hour < 10 ? hour = "0" + hour : hour = hour;
    min < 10 ? min = "0" + min : min = min;
    sec < 10 ? sec = "0" + sec : sec = sec;

    myHour.textContent = `${hour}`;
    myMinute.textContent = `${min}`;
    mySecond.textContent = `${sec}`;

    setTimeout(myTime, 1000);
}

myTime();

// ALARM ---------------------------------------------

const btnAlarm = document.getElementById('btnAlarm');
const alarmPopup = document.querySelector('.alarm-popup');
const btnClosePopup = document.getElementById('close-popup');
const btnSetAlarm = document.getElementById('btnSetAlarm');

const alarmHours = document.getElementById('alarm-hours');
const alarmMin = document.getElementById('alarm-min');
const alarmSec = document.getElementById('alarm-sec');

btnAlarm.addEventListener('click', showAlarmPopUp);
btnSetAlarm.addEventListener('click', setAlarm);
btnClosePopup.addEventListener('click', closePopUp);

// Show the alarm popup function
function showAlarmPopUp(){
    alarmPopup.style.display = "flex";
    alarmHours.value = `${hour}`;
    alarmMin.value = `${min}`;
    alarmSec.value = `${sec}`;

    console.log(hour, min, sec);
}

// Close the alarm popup function
function closePopUp(){
    alarmPopup.style.display = "none";
}

// Set alarm button function
function setAlarm(){
    closePopUp();
}