import post_request from "@/utils/request/post_request";

export default async function delete_orders(order_id) {
  await post_request({
    url: "/orders/delete",
    data: { order_id }
  });
}