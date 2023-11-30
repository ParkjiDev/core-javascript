/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  // arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템들을 수집 : 모든 값 더하기

  let total = 0;
  // for문
  /* for(let i=0; i<arguments.length; i++ ){
    total += arguments[i];
  } */

  // for...of 문
  /* for (let value of arguments) {
    total += value;
  } */

  // 빌려쓰기
  /* Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  }); */

  // forEach, reduce
  // 진짜 배열 만들기
  // const arr = Array.prototype.slice.call(arguments);
  // const arr = Array.from(arguments);
  const arr = [...arguments];

  // arr.forEach(function (element) {
  //   total += element;
  // });
  // arr.forEach(item => total += item)

  // arguments의 (태생)부모 자체를 배열로 바꿔 버리면?
  // arguments.__proto__ = Array.prototype;

  /* -------------------------------------------------------------------------- */
  //reduce
  total = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  return total;
};

const result = calculateTotal(10, 20, 30, 40, 50, 60);
console.log('result', result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
