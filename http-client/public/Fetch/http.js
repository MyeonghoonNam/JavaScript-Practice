const parseResponse = async (response) => {
  const { status } = response;
  let data;

  if (status !== 204) {
    data = await response.json();
  }

  return {
    status,
    data,
  };
};

const request = async (params) => {
  const { url, headers = {}, body, method = "GET" } = params;
  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(url, config);
  return parseResponse(response);
};

const get = async (url, headers) => {
  const response = await request({
    url,
    headers,
    method: "GET",
  });

  return response.data;
};

const post = async (url, headers, body) => {
  const response = await request({
    url,
    headers,
    body,
    method: "POST",
  });

  return response.data;
};

const patch = async (url, headers, body) => {
  const response = await request({
    url,
    headers,
    body,
    method: "PATCH",
  });

  return response.data;
};

const deleteRequest = async (url, headers) => {
  const response = await request({
    url,
    headers,
    method: "DELETE",
  });

  return response.data;
};

export default {
  get,
  post,
  patch,
  delete: deleteRequest,
};
