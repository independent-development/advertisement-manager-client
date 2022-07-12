import { useState } from "react";
import { useThrottleFn } from "ahooks";
import get_random_message_amount from "../services/get_random_message_amount";

export default function useRandomMessageAmount() {
  const [amount, set_amount] = useState(0);

  const { run: handleGetRandomMessageAmount } = useThrottleFn(async (calculate_value) => {
    set_amount("价格计算中... ...");
    const amount_result = await get_random_message_amount(calculate_value);
    set_amount(amount_result);
  }, { wait: 1000 });

  return [amount, handleGetRandomMessageAmount];
};