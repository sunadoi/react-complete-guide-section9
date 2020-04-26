import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  // リクエストのerror
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
  // レスポンスのerror
  console.log(error);
  return Promise.reject(error);
});

const myInterceptor = axios.interceptors.request.use(function () {});
axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
