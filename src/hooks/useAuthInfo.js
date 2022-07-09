import { useState, useEffect } from "react";

import get_request from "@/utils/request/get_request";

export default function useAuthInfo() {
  const [auth_info, set_auth_info] = useState({});

  useEffect(() => {
    (async () => {
      const result = await get_request({ url: "/account/user/v1/detail" });
      set_auth_info(result);
    })();
  }, []);

  return auth_info;
}