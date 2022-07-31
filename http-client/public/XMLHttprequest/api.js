const parseResponse = (xhr) => {
  const { status, responseText } = xhr;
  let data;

  if (status !== 204) {
    data = JSON.parse(responseText);
  }

  return {
    status,
    data,
  };
};

const setHeaders = (xhr, headers) => {
  Object.entries(headers).forEach((entry) => {
    const [name, value] = entry;

    xhr.setRequestHeader(name, value);
  });
};

const request = async (params) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const { url, method = "GET", headers = {}, body = {} } = params;

    xhr.open(method, url);
    setHeaders(xhr, headers);
    xhr.send(JSON.stringify(body));
    xhr.onerror = () => {
      reject(new Error("HTTP Error"));
    };
    xhr.ontimeout = () => {
      reject(new Error("Timeout Error"));
    };
    xhr.onload = () => {
      resolve(parseResponse(xhr));
    };
  });
};

const get = async (url, headers) => {
  const response = await request({
    url,
    method: "GET",
    headers,
  });

  return response.data;
};

const post = async (url, headers, body) => {
  const response = await request({
    url,
    method: "POST",
    headers,
    body,
  });

  return response.data;
};

const patch = async (url, headers, body) => {
  const response = await request({
    url,
    method: "PATCH",
    headers,
    body,
  });

  return response.data;
};

const deleteRequest = async (url, headers) => {
  const response = await request({
    url,
    method: "DELETE",
    headers,
  });

  return response.data;
};

export default {
  get,
  post,
  patch,
  delete: deleteRequest,
};
