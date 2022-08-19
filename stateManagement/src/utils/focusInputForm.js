const focusInputForm = (target) => {
  setTimeout(() => {
    document.querySelector(target).focus();
  }, 50);
};

export default focusInputForm;
