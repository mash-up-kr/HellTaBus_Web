/** 이 아래 코드는 무시해도 됩니다. * */
const pad = (n, width) => {
  const strN = n.toString();
  return n.length >= width ? n : new Array(width - strN.length + 1).join('0') + n;
};

const getTransactionId = (() => {
  let trxcnt = 0;

  return () => {
    const trxTime = new Date().getTime();
    const trxId = `${trxTime}:${pad((trxcnt += 1), 5)}`;
    trxcnt %= 10000;
    return trxId;
  };
})();

const healthyup = (() => {
  const transactions = {};

  return {
    callNative: (functionName, options, callback) => {
      const trx_id = getTransactionId();
      transactions[trx_id] = {};
      transactions[trx_id].call = callback;
      transactions[trx_id].options = options;
      window.healthyup_native_api?.call(functionName, JSON.stringify(options), trx_id);
    },
    event: (_eventData) => {
      const eventData = JSON.parse(_eventData.replace(/\n/g, ''));
      const trx_id = eventData.transactionId;
      transactions[trx_id].call(eventData.result_cd, eventData.result_msg, eventData.extra);
      delete transactions[trx_id];
    },
  };
})();

window.healthyup = healthyup;

/** API * */
const getServerToken = (options = {}) => {
  return new Promise((resolve, reject) => {
    healthyup?.callNative('getServerToken', options, (statusCode, msg, response) => {
      if (statusCode !== 200) {
        reject(new Error());
      }

      const responseObj = JSON.parse(JSON.stringify(response));
      resolve(responseObj.serverToken ?? '');
    });
  });
};

export default getServerToken;
