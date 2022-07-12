import get_request from "@/utils/request/get_request";

export default async function get_random_message_amount(calculate_value) {
  const amount = await get_request({
    url: "/ad/random_message_position/v1/amount",
    params: { calculate_value }
  });
  return amount;
}