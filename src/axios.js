import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  // リクエストのerror
  console.log(error);
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
  // レスポンスのerror
  console.log(error);
  return Promise.reject(error);
});


export default instance;