import get_request from "@/utils/request/get_request";


export default async function get_position_detail(position_id) {
  const detail = await get_request({
    url: "/position/detail",
    params: { position_id }
  });
  return detail;
};