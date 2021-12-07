import healthyup from './core';

/** API * */
const logJwtToken = (serverToken) => healthyup?.callNative('logJwtToken', serverToken, () => {});

const getServerToken = (options = {}) => {
  return new Promise((resolve, reject) => {
    healthyup?.callNative('getServerToken', options, (statusCode, msg, response) => {
      if (statusCode !== 200) {
        reject(new Error());
      }

      const responseObj = JSON.parse(JSON.stringify(response));
      const accessToken = resolve(responseObj.accessToken ?? '');
      logJwtToken(accessToken);

      return accessToken;
    });
  });
};

export default getServerToken;
