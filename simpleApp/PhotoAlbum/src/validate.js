export const validateState = (state) => {
  try {
    const { isRoot, isLoading, nodes, paths, selectedImageUrl } = state;

    validateIsBoolean(isRoot);
    validateIsBoolean(isLoading);
    validateIsArray(nodes);
    validateIsArray(paths);
    validateIsImageUrl(selectedImageUrl);
  } catch (e) {
    alert(e.message);
  }
};

const validateIsBoolean = (value) => {
  const check = typeof value === 'boolean';

  if (check === false) {
    throw new Error('올바른 Boolean 형태가 아닙니다.');
  }
};

const validateIsArray = (value) => {
  const check = Array.isArray(value);

  if (check === false) {
    throw new Error('올바른 Array 형태가 아닙니다.');
  }
};

const validateIsImageUrl = (value) => {
  // null과 정규식을 통한 url만 정상 수행
  if (value === null) {
    return;
  }

  const regex = /^(http|https):(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/;
  const check = regex.test(value);

  if (check === false) {
    throw new Error('올바른 ImageUrl 형태가 아닙니다.');
  }
};
