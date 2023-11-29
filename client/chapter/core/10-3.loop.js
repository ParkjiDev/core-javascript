/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
/* for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
} */

/* let j = 1;
while (j <= 10) {
  if (j % 2 === 0) console.log(j);
  j++;
} */

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
/* for (let i = 0; i < frontEndDev.length; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();
  if (lower.includes('svg') || lower.includes('jquery')) continue;
  console.log(frontEndDev[i]);
} */

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.
/* for (let i = 0; i < frontEndDev.length; i++) {
  console.log(frontEndDev[i]);
  if (frontEndDev[i] === 'JavaScript') break;
} */

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
for (let i = frontEndDev.length - 1; i >= 0; i--) {
  console.log(frontEndDev[i]);
}

for (let i = l, subject; (subject = frontEndDev[--i]); ) {
  console.log(subject);
}
