import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from '../utils/typeOf.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0px';
//     });
//   });
// });

/* -------------------------------------------------------------------------- */
// Promise API 사용

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸 성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  // 객체의 원본 훼손 위험이 있기 때문에 한 번 복사해주고 씀
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, timeout, data, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

delayP(3000).then((res) => {
  // console.log(res);
});

// delayP(false).then((res) => {
//   console.log(res);
// });

// delayP(true)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* -------------------------------------------------------------------------- */

// async - 함수가 promise 객체를 반환 하도록
//       - await 사용 -> promise 객체

// await - 코드의 실행 흐름 제어 (멈춤)
//       - result값 가져오기

async function delayA(data) {
  return data;
}

const value = delayA('뭉치');

// result 가져오는 방법
// 1.
value.then((res) => {
  // console.log(res);
});
// 2.
// console.log(await value);
// 3.
// const value = awiat delayA('뭉치');

function 라면끓이기() {
  delayP({ data: '물' })
    .then((res) => {
      console.log(res);
      return delayP({ data: '스프' });
    })
    .then((res) => {
      console.log(res);
      return delayP({ data: '면넣기' });
    })
    .then((res) => {
      console.log(res);
      return delayP({ data: '그릇에담기' });
    })
    .then((res) => {
      console.log(res);
    });
  console.log('물넣기');
  console.log('스프넣기');
  console.log('면넣기');
  console.log('그릇에담기');
}
// 라면끓이기();

async function 라면끓이기async() {
  const 물 = await delayP({ data: '물' });
  console.log(물);

  const 스프 = await delayP({ data: '스프' });
  console.log(스프);

  const 면 = await delayP({ data: '면' });
  console.log(면);

  const 그릇 = await delayP({ data: '그릇' });
  console.log(그릇);
}
// 라면끓이기async();

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/15');

  console.log(data);

  insertLast(
    document.body,
    `<img src="${data.sprites['front_default']}" alt="독침붕" />`
  );

  console.log(data.sprites['front_default']);
}
// getData();
