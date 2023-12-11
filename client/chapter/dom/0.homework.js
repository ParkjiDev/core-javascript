// querySelector
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const input = document.querySelector('#todo');
console.log(button);

// enevtListner
// 이벤트 핸들러. 얘네는 전부다 객체를 가지고 있음
button.addEventListener('click', handleMenu);

let isOpend = false;
function handleMenu(e) {
  e.preventDefault();

  // 메뉴에게 is-active 클래스 부여
  // menu.classList.toggle('is-active');

  /* if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  } */

  if (!isOpend) {
    menu.classList.add('is-active');
  } else {
    menu.classList.remove('is-active');
  }

  isOpend = !isOpend;
}

input.addEventListener('input', handleInput);

function handleInput() {
  console.log();

  if (this.value === 'hello') {
    console.log('success');
  }
}
