/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환
const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(boolean || WIDTH);
console.log(boolean ?? WIDTH);

// Logical Assignment Operators
let x;
let y;
x ||= y; // x가 false 일때 y값을 x에 할당
x &&= y; // x가 true 일때 y값을 x에 할당
x ??= y; // x가 undefined, null일 때 y값을 x에 할당

let title;
title ||= '지우와 함께하는 JS수업!';
console.log('title', title);

let person = {
  firstName: 'jiwoo',
  lastName: 'park',
};
person.lastName &&= 'Park';

let user = {
  userName: 'jiwoo',
};
user.nickName ??= 'moong';
