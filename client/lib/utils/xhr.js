/* 

[readyState]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // header 셋팅은 open된 뒤에 해야됨.
  // request 할 때 Content-Type을 application/json으로 바꿔주기 위해 setRequestHeader 해줌
  // '내가 send로 넘겨주는건 json 파일이야'를 알려주기 위함
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail({ message: '에러가 발생했습니다.' });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// xhr({
//   method: 'GET',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail({ message }) {
//     console.log(message);
//   },
// });

// xhr({
//   method: 'POST',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail({ message }) {
//     console.log(message);
//   },
//   body: { name: 'tiger' },
// });

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    //숏핸드 프로퍼티
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

/* -------------------------------------------------------------------------- */
/*                               XHR Promise API                              */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  const { method, url, body, errorMessage, headers } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

xhrPromise({
  url: 'https://jsonplaceholder.typicode.com/users',
}).then((res) => {
  // console.log(res);
});

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({ url, body, method: 'POST' });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({ url, body, method: 'PUT' });
};

xhrPromise.delete = (url) => {
  return xhrPromise({ url, method: 'DELETE' });
};
