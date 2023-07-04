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

  const elements = event.currentTarget.elements;


  const formData = {
    delay: elements.delay.value,
    step: elements.step.value,
    amount: elements.amount.value,
  };

  for (let i = 1; i <= formData.amount; i += 1) {
    let delay = formData.delay;
    createPromise(i, delay )
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    // delay += formData.step;
  };
  event.currentTarget.reset();
}
