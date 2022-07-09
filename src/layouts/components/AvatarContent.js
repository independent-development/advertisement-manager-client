/* eslint-disable react/prop-types */
import { Space, Button } from "antd";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import post_request from "@/utils/request/post_request";

export default function AvatarContent({ wallet, username, mobile_phone }) {

  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await post_request({ url: "/account/user/v1/logout" });
    await navigate("/login");
  }, [navigate]);

  return (
    <Space direction="vertical">
      <div>
        <span>用户名:</span>
        <span>{username}</span>
      </div>
      <div>
        <span>手机号:</span>
        <span>{mobile_phone || "未绑定手机"}</span>
      </div>
      <div>
        <span>绑定钱包:</span>
        <span>{wallet || "未绑定钱包"}</span>
      </div>
      <Button danger block type="primary" onClick={handleLogout}>
        退出登录
      </Button>
    </Space>
  )
};


AvatarContent.propTypes = {


};
AvatarContent.defaultProps = {


};