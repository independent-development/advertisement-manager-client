import axios from "axios";
import { message } from "antd";

const instance = axios.create({
  method: "GET",
  baseURL: "/api/",
});

export default async function get_request(params) {
  const { data } = await instance(params);
  if (data.code === 200) {
    return data.data;
  };
  message.error(data.message);
  throw new Error(data.message);
};