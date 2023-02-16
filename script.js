let a = '';
let b = '';
let sign = '';
let finish = false;
let result = '';

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.screen');

function Clear() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = '0';
  result;
}

const ClearAll = document.querySelector('.C').addEventListener('click', Clear);
const btns = document.querySelector('.buttons').addEventListener('click', (event) => {
  if (!event.target.classList.contains('btn')) {return}
  if (event.target.classList.contains('.C')) {return}
  const key = event.target.textContent;

  if (digits.includes(key)) {
    if (sign === '' && b === '') {
      a += key;
      out.textContent = a;
    } else {
      b += key;
      out.textContent = b;
    }
    return
  }

  if (action.includes(key)) {
    sign = key;
  }

  if (key === '=') {
    switch(sign) {
      case('+'): 
        out.textContent = (+a) + (+b); 
        break;
      case('-'): 
        out.textContent = (+a) - (+b);
        break;
      case('X'): 
        out.textContent = (+a) * (+b);
        break;
      case('/'): 
        out.textContent = (+a) / (+b);
        break;
    }
    finish = true;
  }
}
);

