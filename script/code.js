let btnDays = document.querySelector('[data-submit]')

function converter() {
   let Age = +document.querySelector('#Age').value 
   let output = document.querySelector('#output')
 let Days = Age * 365;
 output.textContent = `${Age} years is ${Days} days`
    }

 btnDays.addEventListener('click', converter);