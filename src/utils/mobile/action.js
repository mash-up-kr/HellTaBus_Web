import healthyup from './core';

export const startActivity = (options, callback) => {
  healthyup.callNative('startActivity', options, callback);
};

export const setBackButtonReceive = (options, callback) => {
  healthyup.callNative('setBackButtonReceive', options, callback);
};

export const closeWebView = (options, callback) => {
  healthyup.callNative('closeWebView', options, callback);
};
