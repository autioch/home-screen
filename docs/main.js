const tag = (tagName = 'div', className = '') => {
  const el = document.createElement(tagName);
  el.className = className;
  return el;
};
