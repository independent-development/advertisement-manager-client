import { useState, useCallback } from "react";

export default function useBalance() {

  const [balance, set_balance] = useState(0);

  const handleBalanceCallback = useCallback(async () => {
    const USDT_CONTRACT = await tronWeb.contract().at("TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj");
    const balanceOf = await USDT_CONTRACT.balanceOf(tronWeb.defaultAddress.base58).call();
    set_balance(balanceOf / 1000000);
  }, []);

  return [balance, handleBalanceCallback];
}