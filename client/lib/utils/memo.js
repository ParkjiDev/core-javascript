export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];

    // 이미 값이 있는 경우
    if (cache[key]) {
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다`);
      return cache[key];
    }
    cache[key] = callback();
  };
})();
