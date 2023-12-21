const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const defalutOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const moong = async (options) => {
  const { url, ...restOptions } = {
    ...defalutOptions,
    ...options,
    headers: {
      ...defalutOptions.headers,
      ...options.headers,
    },
  };
  console.log(url);
  console.log(restOptions);

  // fetch()는 promise를 return. method의 default는 GET
  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

// moong({
//   url: END_POINT,
//   method: 'GET',
//   body: { name: 'moong' },
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

const user = await moong({ url: END_POINT });
console.log(user.data);
