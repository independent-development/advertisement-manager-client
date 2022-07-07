import get_request from "@/utils/request/get_request";

export default async function get_transaction_list() {
  const transaction_list = await get_request({
    url: "/transaction/list"
  });
  return transaction_list;
}