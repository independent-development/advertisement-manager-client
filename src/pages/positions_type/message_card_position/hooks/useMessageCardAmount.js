import { useState } from "react";
import { useThrottleFn } from "ahooks";
import get_message_card_amount from "../services/get_message_card_amount";

export default function useMessageCardAmount() {
  const [amount, set_amount] = useState(0);

  const { run: handleGetRandomMessageAmount } = useThrottleFn(async (calculate_value) => {
    set_amount("价格计算中... ...");
    const amount_result = await get_message_card_amount(calculate_value);
    set_amount(amount_result);
  }, { wait: 1000 });

  return [amount, handleGetRandomMessageAmount];
};