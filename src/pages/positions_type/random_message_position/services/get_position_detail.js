import get_request from "@/utils/request/get_request";


export default async function get_position_detail(position_id) {
  const detail = await get_request({
    url: "/ad/random_message_position/v1/detail",
    params: { position_id }
  });
  return detail;
};