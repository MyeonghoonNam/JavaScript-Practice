export const parse = (querystring) =>
  querystring.split('&').reduce((acc, keyAndValue) => {
    const [key, value] = keyAndValue.split('=');

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});
