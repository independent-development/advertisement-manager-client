import axios from "axios";


export default axios.create({
  method: "POST",
  baseURL: "/api/v1/",
});