const cloneDeepObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export default cloneDeepObject;
