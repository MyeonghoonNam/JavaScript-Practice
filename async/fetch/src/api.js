const API_END_POINT = 'https://kdt.roto.codes';

export const request = (url) => {
  return fetch(`${API_END_POINT}${url.startsWith('/') ? url : `/${url}`}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(`${res.status} Error`);
    })
    .catch((e) => alert(e.message));
};
