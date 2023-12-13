/* global gsap */

const list = document.querySelectorAll('li');
const depth = document.querySelectorAll('.depth');
const nav = document.querySelector('nav');

list.forEach((li) => {
  li.addEventListener('mouseenter', (e) => {
    let currentDepth = e.target.lastElementChild;

    // depth.forEach(item =>  item.style.height = 0)
    gsap.to(depth, { height: 0 });

    // currentDepth.style.height = '100px'

    gsap.to(currentDepth, { height: 100 });
  });
});

nav.addEventListener('mouseleave', () => {
  // depth.forEach(item =>  item.style.height = 0)

  gsap.to(depth, { height: 0 });
});
