import get_request from "@/utils/request/get_request";


export default async function get_order_detail(order_id) {
  const order_detail = await get_request({
    url: "/ad/order/v1/detail",
    params: { order_id }
  });
  return order_detail;
};