1;
const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let { amount, delay, step } = event.currentTarget.elements;

  amount = Number(amount.value);
  delay = Number (delay.value);
  step = Number(step.value);

  for (let i = 1; i <= amount; i += 1) {
    // let inputDelay = delay;
    createPromise(i, delay + step * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  event.currentTarget.reset();
}
