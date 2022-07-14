import get_request from "@/utils/request/get_request";

export default async function get_message_card_amount(calculate_value) {
  const amount = await get_request({
    url: "/ad/message_card_position/v1/amount",
    params: { calculate_value }
  });
  return amount;
}