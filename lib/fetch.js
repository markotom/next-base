import qs from 'querystring';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { apiHost },
} = getConfig();

async function request(method, endpoint, data) {
  const headers = {};
  const options = {
    method,
    headers,
  };

  let url = endpoint;

  if (method === 'POST' || method === 'PUT') {
    options.body = data;
  }

  if (method === 'GET') {
    url += `?${qs.stringify(data)}`;
  }

  const response = await fetch(`${apiHost}${url}`, options);
  return response.json();
}

export default {
  request,

  get(endpoint, data) {
    return request('GET', endpoint, data);
  },

  post(endpoint, data) {
    return request('POST', endpoint, data);
  },

  put(endpoint, data) {
    return request('PUT', endpoint, data);
  },

  delete(endpoint, data) {
    return request('DELETE', endpoint, data);
  },
};
