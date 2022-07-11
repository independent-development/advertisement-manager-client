import post_request from "@/utils/request/post_request";


export default async function modify_position(position_id, position_info) {
  const response = await post_request({
    url: "/ad/random_message_position/v1/update",
    data: { position_id, ...position_info }
  });
  console.log(response);
}