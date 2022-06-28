import axios from "axios";

const instance = axios.create({
  method: "POST",
  baseURL: "/api/v1/",
});

export default async function post_request(params) {
  const { data } = await instance(params);
  if (data.code === 200) {
    return data.data;
  };
  throw new Error(data.message);
};