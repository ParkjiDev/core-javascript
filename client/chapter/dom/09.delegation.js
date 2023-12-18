/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const nav = getNode('nav');

function handleClick(e) {
  let target = e.target;
  let li = target.closest('li');

  if (!li) return; // 만약 li가 null일 경우 밑에서 에러나기 때문에 여기서 검사해줌

  let dataName = attr(li, 'data-name');

  if (li.className === 'home') {
    li.style.background = 'orange';
  }

  if (dataName === 'about') li.style.background = 'hotpink';
  if (dataName === 'home') li.style.background = 'greenyellow';
  if (dataName === 'contact') li.style.background = 'dodgerblue';
}

nav.addEventListener('click', handleClick);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
