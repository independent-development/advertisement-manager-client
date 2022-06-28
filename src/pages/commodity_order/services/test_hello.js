import get_request from "@/utils/request/get_request";


export default async function test_hello(commodity_info) {
  const response = await get_request({
    url: "/hello",
    body: commodity_info
  });
  console.log(response);
}