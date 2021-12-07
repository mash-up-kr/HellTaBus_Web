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

let onBackButtonPressed = (result_cd, result_msg, extra) => {
  console.log(result_cd + result_msg + JSON.stringify(extra));
  console.log('뒤로가기 버튼 웹에서 작동 커스텀 전 상태');
};

export const customOnBackButtonPressed = (customFunction) => {
  onBackButtonPressed = customFunction;
};

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
      const { eventType } = eventData;
      switch (eventType) {
        case 'CALLBACK_EVENT':
          transactions[trx_id].call(eventData.result_cd, eventData.result_msg, eventData.extra);
          break;
        case 'BACK_BUTTON_EVENT':
          onBackButtonPressed(eventData.result_cd, eventData.result_msg, eventData.extra);
          break;
        default:
          break;
      }

      delete transactions[trx_id];
    },
  };
})();

window.healthyup = healthyup;

export default healthyup;
