import post_request from "@/utils/request/post_request";


export default async function create_commodity(commodity_info) {
  const response = await post_request({
    url: "/commodity/create",
    body: commodity_info
  });
  console.log(response);
}