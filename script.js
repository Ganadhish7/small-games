'use strict';

let inputString = '';
// let x = -1000;
// let y = BigInt('1000000000000000');

document.querySelector('.submit').addEventListener('click', function () {
  let text = document.querySelector('.text2').value;
  document.querySelector('.message').textContent = text;
  console.log(text);
  // document.querySelector('body').style.background = 'red';
  if (text === inputString) {
    document.querySelector('.message').textContent = 'No input';
  }
  // else if (text >= -1000 && text <= 1000000000000000) {
  //   document.querySelector('.message').textContent = 'Not a string';
  // }
});
document.querySelector('.refresh').addEventListener('click', function () {
  document.querySelector('.text2').value = '';
  document.querySelector('body').style.background = 'rgb(50 , 110 , 170)';
  document.querySelector('.date').value = '';
  document.querySelector('.message').textContent = 'entered string';
});
