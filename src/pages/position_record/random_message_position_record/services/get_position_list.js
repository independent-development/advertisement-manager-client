import get_request from "@/utils/request/get_request";


export default async function get_position_list() {
  const list_result = await get_request({
    url: "/ad/random_message_position/v1/list"
  });
  return list_result;
}