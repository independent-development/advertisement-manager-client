import post_request from "@/utils/request/post_request";

export default async function delete_commodity(commodity_id) {
  await post_request({
    url: "/commodity/delete",
    data: { commodity_id }
  });
};