/*global gsap*/

import {
  getNode as $,
  insertLast,
  renderUserCard,
  renderSpinner,
  renderEmptyCard,
  xhrPromise,
  delayP,
  clearContents,
} from './lib/index.js';
import { moong } from './lib/utils/moong.js';
import { changeColor } from './lib/utils/color.js';

const END_POINT = 'http://localhost:3000/users';

// xhrPromise.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//   res.forEach((item) => {
//     // insertLast(document.body, `<div>${item.name}</div>`);
//   });
// });

// [phase -1]
// 1. user 데이터를 fetch 해주세요
// 2. 함수안에 넣기
// 3. user 데이터 랜더링하기

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  // async, await은 에러 잡을때 try-catch 사용
  try {
    // 강제로 2초 delay줌
    await delayP(500);
    gsap.to('.loadingSpinner', {
      opacity: 0,
      // onComplete : 애니메이션 실행완료된후 실행되는 콜백함수
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await moong.get(END_POINT);
    const userData = response.data;

    userData.forEach((data) => renderUserCard(userCardInner, data));
    changeColor('.user-card');
    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

// 삭제
function handleDelete(e) {
  const button = e.target.closest('button');
  // article의 data-index 가져와야되기 때문에 article도 찾아옴
  // index 가져오려는 이유는 delete 통신에서 id를 전달해줘야 하기 때문
  const article = e.target.closest('article');

  // 삭제 버튼을 눌렀을 경우의 article 수집을 위한 if문
  if (!article || !button) return;

  const id = article.dataset.index.slice(5);

  moong.delete(`${END_POINT}/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);

/* -------------------------------------------------------------------------- */
// 입력창
const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });
}

function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
}

function handleDone(e) {
  e.preventDefault();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = {
    name,
    email,
    website,
  };
  console.log('obj', obj);

  moong.post(END_POINT, obj).then(() => {
    clearContents(userCardInner);
    renderUserList();
    gsap.to('.pop', { autoAlpha: 0 });
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
