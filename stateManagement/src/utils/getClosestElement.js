const getClosestElement = (element, selector) => {
  const reg = /^\./;
  let evaluate = false;

  if (reg.test(selector)) {
    evaluate = element.classList.contains(selector);
  } else {
    evaluate = element.tagName === selector.toUpperCase();
  }

  if (evaluate) return element;

  return getClosestElement(element.parentElement, selector);
};

export default getClosestElement;
