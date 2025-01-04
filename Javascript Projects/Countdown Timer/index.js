const submit_btn = document.getElementById("submit_btn");
const reset_btn = document.getElementById("reset_btn");
const target_date_picker = document.getElementById("target_date");
const container = document.getElementById("container");
const timer_container = document.getElementById("timer");
const days_element = document.getElementById("days");
const hours_element = document.getElementById("hours");
const minutes_element = document.getElementById("minutes");
const seconds_element = document.getElementById("seconds");
const tick_sound = document.getElementById("tick_sound");

let countdownInterval;

submit_btn.addEventListener("click", function () 
{
    const target_date = new Date(target_date_picker.value);
    const now = new Date()
    if (isNaN(target_date.getTime()) || target_date <= now) 
    {
        alert("Please enter a valid date and time!");
        return;
    }

    container.style.display = "none";
    timer_container.style.display = "flex";

    startCountdown(target_date);
});

reset_btn.addEventListener("click", function () 
{
    container.style.display = "flex";
    timer_container.style.display = "none";
    clearInterval(countdownInterval);
    resetTimerDisplay();
    tick_sound.pause();
    tick_sound.currentTime = 1;
});

function startCountdown(target_date) 
{
    function updateTimer() 
    {
        const now = new Date();
        const time_difference = target_date - now;

        if (time_difference <= 0) 
        {
            clearInterval(countdownInterval);
            alert("Countdown has ended!");
            resetTimerDisplay();
            tick_sound.pause();
            tick_sound.currentTime = 1;
            return;
        }

        const days = Math.floor(time_difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time_difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time_difference / (1000 * 60)) % 60);
        const seconds = Math.floor((time_difference / 1000) % 60);

        days_element.textContent = formatTime(days);
        hours_element.textContent = formatTime(hours);
        minutes_element.textContent = formatTime(minutes);
        seconds_element.textContent = formatTime(seconds);

        tick_sound.currentTime = 0;
        tick_sound.play();
    }

    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
}

function resetTimerDisplay() 
{
    days_element.textContent = "00";
    hours_element.textContent = "00";
    minutes_element.textContent = "00";
    seconds_element.textContent = "00";
}

function formatTime(unit) 
{
    return unit < 10 ? "0" + unit : unit;
}
