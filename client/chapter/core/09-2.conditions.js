/* ------------------- */
/* Logical Operators   */
/* ------------------- */
let age = 20;
if (age >= 14 && age <= 90) {
  console.log('나이가 14에 이상 90세 이하 입니다.');
} else {
  console.log('나이가 14에 이상 90세 이하가 아닙니다');
}

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB', AandB);
// logical AND Assignment 논리곱 할당 연산자
// a = a && b;
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB', AorB);
// logical OR Assignment 논리합 할당 연산자
// a = a || b;
// a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log('whichFalsy', whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
console.log('whichTruthy', whichTruthy);

// 로그인 구현하기 예제
let user = prompt('누구세요?', '');

if (user?.toLowerCase === 'admin') {
  let password = prompt('비밀번호를 입력하세요.', '').toLowerCase;

  if (password?.toLowerCase === 'themaster') {
    alert('환영합니다!');
  } else if (password === null || password === '') {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패했습니다.');
  }
} else if (user === null || user.replace(/\s*/g, '') === '') {
  alert('취소되었습니다.');
} else {
  alert('인증에 실패했습니다.');
}
