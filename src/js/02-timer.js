// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

const daysToLeft = document.querySelector('[data-days]');
const hoursToLeft = document.querySelector('[data-hours]');
const minutesToLeft = document.querySelector('[data-minutes]');
const secondsToLeft = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
      return;
    }

    startBtn.disabled = false;
    startBtn.style.backgroundColor = 'green';
    console.log(selectedDates[0]);

    startBtn.addEventListener('click', myDate);

    function myDate() {
      timerId = setInterval(() => {
        const dateToCountdown = selectedDates[0].getTime();
        console.log(dateToCountdown);
        const actualDate = new Date().getTime();
        console.log(actualDate);
        const timeToLeft = dateToCountdown - actualDate;
        console.log(timeToLeft);

        
        function convertMs(ms) {
          // Number of milliseconds per unit of time
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;
          
          // Remaining days
          const days = Math.floor(ms / day);
          // Remaining hours
          const hours = Math.floor((ms % day) / hour);
          // Remaining minutes
          const minutes = Math.floor(((ms % day) % hour) / minute);
          // Remaining seconds
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);
          
          return { days, hours, minutes, seconds };
        }
        
        console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
        console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
        console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
        
        daysToLeft.textContent =
        convertMs(timeToLeft).days < 10
        ? '0' + convertMs(timeToLeft).days
        : convertMs(timeToLeft).days;
        hoursToLeft.textContent =
        convertMs(timeToLeft).hours < 10
        ? '0' + convertMs(timeToLeft).hours
        : convertMs(timeToLeft).hours;
        minutesToLeft.textContent =
        convertMs(timeToLeft).minutes < 10
        ? '0' + convertMs(timeToLeft).minutes
        : convertMs(timeToLeft).minutes;
        secondsToLeft.textContent =
        convertMs(timeToLeft).seconds < 10
        ? '0' + convertMs(timeToLeft).seconds
            : convertMs(timeToLeft).seconds;
        
        if (timeToLeft <= 1) {
          clearInterval(timerId);
          daysToLeft.textContent = '00';
          hoursToLeft.textContent = '00';
          minutesToLeft.textContent = '00';
          secondsToLeft.textContent = '00';
        }
      }, 1000);
      startBtn.disabled = true;
      startBtn.remove();
    }
  },
};
const fp = flatpickr(input, options);
