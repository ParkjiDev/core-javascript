/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// function handler() {
//   console.log('클릭 발생');
// }
// first.oncilck = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])
function handleClick() {
  console.log('클릭');
}
// first.addEventListener('click', handleClick);
// // first.removeEventListener('click', handleClick);
// getNode('.second').addEventListener('click', () => {
//   first.removeEventListener('click', handleClick);
// });

// function bindEvent(node, type, handler) {
//   if (typeof node === 'string') node = getNode(node);
//   node.addEventListener(type, handler);
//   return () => node.removeEventListener(type, handler);
// }

// const remove = bindEvent('.first', 'click', handleClick);
// getNode('.second').addEventListener('click', remove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: x, offsetY: y }) {
  console.log(x, y);
  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${
    y - ball.offsetHeight / 2
  }px)`;
}

//ground.addEventListener('click', handleClickBall);

// 클릭 두 번 할 경우 두번째 클릭에선 공이 클릭되어 공의 좌표 가져오게됨. 따라서 pointer-events: none 해줌

/* -------------------------------------------------------------------------- */
/* ground.addEventListener('mousemove', ({ offsetX: x, offsetY: y }) => {
  // console.log(x,y);

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `;

  ground.insertAdjacentHTML('beforeend', template);
}); */

/* -------------------------------------------------------------------------- */
/*                                  debounce                                  */
/* -------------------------------------------------------------------------- */
function debounce(callback, limit = 100) {
  let timeout;

  return function (...args) {
    // console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      /* 여기서 전달되는 this는 ground
      debounce((e) => {
        console.log(e);
      }   이거는 화살표 함수여서 this가 없음. 
      따라서 apply 사용해 this 전해주고, e도 전달해주는거 */
      console.log('this', this);
      console.log('callback', callback);
      callback.apply(this, args);
    }, limit);
  };
}

/* ground.addEventListener(
  'mousemove',
  debounce((e) => {
    console.log(e);
  })
); */

/* -------------------------------------------------------------------------- */
function func(a, b) {
  console.log('this : ', this);
  console.log('A : ', a);
  console.log('B : ', b);
}

// func.call('tiger', 1, 2); // 실행
// func.apply('tiger', [1, 2]); // 실행
const a = func.bind('tiger', 1, 2); // 실행 X

// 사용 예시
// button.addEventListener('click', a);

// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?
function funcA(a, b, c) {
  console.log(a, b, c);
}

function funcB(a, b, c) {
  this(a, b, c);
}

funcB.apply(funcA, [1, 2, 3]);

/* -------------------------------------------------------------------------- */
/*                                  throttle                                  */
/* -------------------------------------------------------------------------- */

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback();
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// ground.addEventListener(
//   'mousemove',
//   throttle((e) => {
//     console.log(e);
//   })
// );
