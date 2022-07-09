import axios from "axios";
import { message } from "antd";

export default async function upload_request(file_object) {
  const form_data = new FormData();
  form_data.append("file", file_object);

  const { data } = await axios.post("/api/ad/v1/system/upload", form_data);

  if (data.code === 200) {
    return data.data;
  };
  message.error(data.message);
  throw new Error(data.message);
};