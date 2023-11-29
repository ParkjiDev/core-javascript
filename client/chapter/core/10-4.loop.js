/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};
Object.prototype.nickname = 'jiwoo';
// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
const key = 'creator';
// console.log(key in javaScript);

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// hasOwnProperty()
// 진짜 Object가 가진 능력에 접근해서 hasOwnProperty써야하는데, javascript는 조상인 Object 접근해서 hasOwnProperty를 써야한다.
// 따라서 call을 사용하여 hasOwnProperty를 사용.
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(key);
  }
}

/* -------------------------------------------------------------------------- */

// for..in은 배열에 사용하는것은 지양. 객체를 순환하는 용도로 사용할 것
// 배열은 순서 보장이 안됨.
const tens = [10, 100, 1000, 10000];
for (const key in tens) {
  console.log(key);
}

/* -------------------------------------------------------------------------- */
const obj = {};

obj.nickName = 'tiger';

Object.defineProperty(obj, 'key1', {
  enumerable: false,
  value: 'jiwoo',
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
    enumerable: true,
  },
  property2: {
    value: 'moong',
    writable: false,
    configurable: true,
  },
});
