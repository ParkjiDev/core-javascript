let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};
for (const key in messenger) {
  if (Object.hasOwnProperty.call(messenger, key)) {
    cloneObject[key] = messenger[key];
  }
}

// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);

// 3. 전개 연산자(...)를 사용한 복사 (얕은 복사) //제일 많이씀
const spreadObject = { ...messenger };

// 4. 객체를 복사해주는 유틸 함수
function copiedObject(obj) {
  return { ...obj };
}

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
// let combinedCssMap = { ...cssMapA, ...cssMapB };

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copyedContainerStyles = { ...containerStyles };

const realDeep = cloneDeep(containerStyles);
console.log(realDeep);
// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

/* -------------------------------------------------------------------------- */
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    content: 'application',
    access: '*',
  },
};

function ajax(options) {
  const { method, body, headers } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  console.log(method);
  console.log(body);
  console.log(headers);
}

ajax({
  method: 'POST',
  headers: {
    origin: 'euid',
  },
});
