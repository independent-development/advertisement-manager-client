import { message } from "antd";
import { useLockFn } from "ahooks";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useCallback } from "react";

export default function useActivatePayment(check_wallet_status) {

  const [activate_status, set_activate_status] = useState(false);

  const handleCallback = useCallback(async () => {
    if (check_wallet_status) {
      const result = await tronLink.request({ method: "tron_requestAccounts" });
      if (result.code === 200) {
        await set_activate_status("ACTIVED");
        message.success("钱包激活成功!");
      } else {
        await set_activate_status("REACTIVE");
        message.error("请重新激活钱包!");
      }
    }
  }, [check_wallet_status]);

  useEffect(() => { handleCallback() }, [handleCallback]);

  const handlePayment = useLockFn(async () => {
    const message_key = uuidv4();
    try {
      message.loading({ key: message_key, content: "正在拉起支付... ..." });
      const USDT_CONTRACT = await tronWeb.contract().at("TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj");
      const tx_result = await USDT_CONTRACT.transfer("TSnfU72F6EmLbobtjNTUxsjjApWpTS9LdF", 20000000).send();
      message.success({ key: message_key, content: "支付成功!", duration: 1 });
      console.log(tx_result);
    } catch (error) {
      message.error({ key: message_key, content: `支付失败!${error.message}`, duration: 1 });
    }
  });

  return [activate_status, handlePayment];

};