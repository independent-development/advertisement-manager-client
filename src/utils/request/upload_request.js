import axios from "axios";
import { message } from "antd";

export default async function upload_request(url, { file_object, length_width_ratio }) {
  const form_data = new FormData();

  form_data.append("file", file_object);
  form_data.append("length_width_ratio", length_width_ratio);

  const { data } = await axios.post(url, form_data);

  if (data.code === 200) {
    return data.data;
  };
  message.error(data.message);
  throw new Error(data.message);
};