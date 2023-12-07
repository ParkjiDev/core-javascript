function earth() {
  let water = true;
  let gravity = 10;
  return function (value) {
    console.log(water);
    gravity = value;
  };
}
const ufo = earth();

/* -------------------------------------------------------------------------- */

const button = document.querySelector('button');

/* function handleClick() {
  let isClicked = false;
  return function () {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
}

button.addEventListener('click', handleClick()); */

// 즉시실행함수
const handleClick = (() => {
  let isClicked = false;
  return function () {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();
button.addEventListener('click', handleClick);

function bindEvent(node, type, handler) {
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}
const remove = bindEvent(button, 'click', handleClick);

/* -------------------------------------------------------------------------- */

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [state, setState] = useState(true);
