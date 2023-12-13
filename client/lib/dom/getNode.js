function getNode(node, context = document) {
  if (
    Object.prototype.toString.call(node).slice(8, -1).toLowerCase() !== 'string'
  ) {
    throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.');
  }
  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }
  return document.querySelector(node);
}

function getNodes(node) {
  if (
    Object.prototype.toString.call(node).slice(8, -1).toLowerCase() !== 'string'
  ) {
    throw new Error('getNodes 함수의 인수는 문자 타입 이어야 합니다.');
  }
  return document.querySelectorAll(node);
}
