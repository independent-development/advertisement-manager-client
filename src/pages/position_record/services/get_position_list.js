import get_request from "@/utils/request/get_request";


export default async function get_position_list() {
  const list_result = await get_request({
    url: "/position/list"
  });
  return list_result;
}