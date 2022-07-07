import post_request from "@/utils/request/post_request";


export default async function create_position(position_info) {
  const response = await post_request({
    url: "/order/create",
    data: position_info
  });
  console.log(response);
}