// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;



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

console.log(convertMs(2000));// {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000));// {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000));// {days: 0, hours: 6 minutes: 42, seconds: 20}


// input.addEventListener('input', myDate);
// function myDate(event) {
//     // if (input.textContent < new Date()) {
//     //     window.alert("Please choose a date in the future");
//     //     return
//     // };
//     // if (event.target) {
//     //     startBtn.disabled = false;
//     // };
// };


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  
      
    startBtn.disabled = false;
  const selectedDate = selectedDates[0];
  if (selectedDate < new Date()) {
    window.alert('Please choose a date in the future');
    return;
  };
    console.log(selectedDates[0]);
  },
};
const fp = flatpickr(input, options);

