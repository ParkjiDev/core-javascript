// 모듈 프로그래밍
// 1. named export (이름 내보내기) -> { 이름 }
// 이름에 중괄호 있어야됨

// 2. default export (기본 내보내기) -> 이름
// 이름에 중괄호 없이 씀(clearContents는 default export로 가져온 상태. 무조건 파일하나에서 한개만 됨)

// import { getNode } from './lib/dom/getNode.js';
// import clearContents from './lib/dom/clear.js';
// import { insertLast } from './lib/dom/insert.js';

import { getNode, clearContents, insertLast, getNodes } from './lib/index.js';

// 1. input value 값 가져오기
//     - input에게 input 이벤트를 걸어 준다.
//     - input.value 로 가져온다.

// 2. 두 수의 합 더하기
//     - 타입 확인하기.

// 3. 합계 랜더링 하기
//     - insertLast(), insertAdjacentHTML()

function phase1() {
  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');
  function handleInput() {
    const firstValue = first.value * 1;
    const secondValue = second.value / 1;
    const total = firstValue + secondValue;

    // result.textContent = ''

    clearContents(result);
    insertLast(result, total);
  }

  function handleDlear(e) {
    e.preventDefault();
    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('input', handleDlear);
}

// 이벤트 위임 처리
const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));

function handleInput() {
  const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

  clearContents(result);
  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();

  numberInputs.forEach(clearContents);
  result.textContent = '-';
}

calculator.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
