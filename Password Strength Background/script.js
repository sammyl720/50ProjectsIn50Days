const bgEl = document.getElementById('background');

const password = document.getElementById('password');


password.addEventListener('input', e => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  bgEl.style.filter = `blur(${blurValue}px)`;
})