import get_request from "@/utils/request/get_request";


export default async function get_order_record_list() {
  const list_result = await get_request({
    url: "/order/list"
  });
  return list_result;
}