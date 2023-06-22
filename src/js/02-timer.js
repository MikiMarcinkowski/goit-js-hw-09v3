// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');

const fp = flatpickr(input, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
}); 
