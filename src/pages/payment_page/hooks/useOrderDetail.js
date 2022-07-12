import { useState, useCallback } from "react";
import get_order_detail from "../services/get_order_detail";

/** 检测订单详情 **/
export default function useOrderDetail() {
  const [order_detail, set_order_detail] = useState({});

  const handleGetOrderDetail = useCallback(async (order_id) => {
    const order_detail = await get_order_detail(order_id);
    set_order_detail(order_detail);
  }, []);

  return [order_detail, handleGetOrderDetail];
};