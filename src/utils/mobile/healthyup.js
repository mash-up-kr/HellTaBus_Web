export const healthyup = {};
const transactions = {};
let trxcnt = 0;

/** API * */
healthyup.getServerToken = (options, callback) => {
  healthyup?.callNative('getServerToken', options, callback);
};

/** 이 아래 코드는 무시해도 됩니다. * */
healthyup.callNative = (functionName, options, callback) => {
  const trx_id = healthyup.getTransactionId();
  transactions[trx_id] = {};
  transactions[trx_id].call = callback;
  transactions[trx_id].options = options;
  window.healthyup_native_api?.call(functionName, JSON.stringify(options), trx_id);
};

healthyup.event = (_eventData) => {
  const eventData = JSON.parse(_eventData.replace(/\n/g, ''));
  const trx_id = eventData.transactionId;
  transactions[trx_id].call(eventData.result_cd, eventData.result_msg, eventData.extra);
  delete transactions[trx_id];
};

function pad(n, width) {
  const strN = n.toString();
  return n.length >= width ? n : new Array(width - strN.length + 1).join('0') + n;
}

healthyup.getTransactionId = () => {
  const trxTime = new Date().getTime();
  const trxId = `${trxTime}:${pad((trxcnt += 1), 5)}`;
  trxcnt %= 10000;
  return trxId;
};
