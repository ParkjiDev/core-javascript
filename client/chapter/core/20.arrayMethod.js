/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
console.log(Array.isArray('hi'));
console.log(Array.isArray([1, 2, 3]));

// let isArray = (arr) => Array.isArray(arr);
let isArray = (arr) =>
  Object.prototype.toString.call(arr).slice(8, -1).toLowerCase() === 'array';
/* function isArray(arr) {
  // return Array.isArray(arr);
  return (
    Object.prototype.toString.call(arr).slice(8, -1).toLowerCase() === 'array'
  );
} */

const arr = [10, 100, 1000, 10_000];
const people = [
  { id: 0, name: '박지우', job: '무직', age: 30, imageSrc: 'asdfg' },
  { id: 1, name: '뭉치', job: '푸들왕', age: 18, imageSrc: 'qwert' },
  { id: 2, name: '박지은', job: '연구원', age: 36, imageSrc: 'zxcvb' },
  { id: 3, name: '양파', job: '시츄왕', age: 12, imageSrc: 'mnbvc' },
];

/* 요소 순환 ---------------------------- */

// forEach (반환값 x)
arr.forEach((item, index) => {
  console.log(index);
});
people.forEach((item) => console.log(item.job));

const span = document.querySelectorAll('span');

// 이건 비효율적인 방법. 이벤트리스너를 각각 설정하는건 좋지 않음. 추후에 event delegation 배울 예정
span.forEach((item) => {
  item.addEventListener('click', () => {
    console.log('clicked!');
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse
/* const reverseArray = arr.reverse();
console.log('reverseArray', reverseArray);
console.log('reverseArray', arr); // 원본도 뒤집혀버림 */
const reverseArray = arr.toReversed(); // toReversed 최신 문법. 원본 변화 없음
console.log('reverseArray', reverseArray);
console.log('arr', arr);

// splice
// console.log(arr.splice(1, 2));
console.log('arr', arr);
// console.log(arr.splice(1, 2, 'javascript', 'css', 'react'));
// toSpliced -> 원본 변화 x

// sort -> 원본 훼손됨
/* const a = arr.sort((a, b) => {
  return b - a;
});
console.log('a', a); */
// toSorted -> 원본 유지
const a = arr.toSorted((a, b) => {
  return b - a;
});
console.log('a', a);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map
const job = people.map((item) => item.job);
console.log('job', job);

const card = people.map((item, index) => {
  return /* html */ `
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `;
});
// console.log(card);
// card.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// });

const newAge = people.map((item) => item.age - 1);
console.log('newAge', newAge);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// 조건에 해당하는 맨처음 요소 하나만 반환
const findUser = people.find((item) => {
  return item.age < 20;
});
console.log('findUser', findUser);

// findIndex
const findUserIndex = people.findIndex((item) => {
  return item.age < 20;
});
console.log('findUserIndex', findUserIndex);

/* 요소 걸러내기 --------------------------- */

// filter
const findUserAll = people.filter((item) => item.age < 20);
console.log('findUserAll', findUserAll);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);
console.log('totalAge', totalAge);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

// console.log( template );

document.body.insertAdjacentHTML('beforeend', template);
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join
const str = '지우 은주 용기 지은 뭉치';
const stringToArray = str.split(' ');
console.log('stringToArray', stringToArray);

const arrayToString = stringToArray.join('-');
console.log('arrayToString', arrayToString);
