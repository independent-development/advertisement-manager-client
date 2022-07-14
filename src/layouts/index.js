/* eslint-disable react/prop-types */
import { Avatar, Space, Button, Popover } from "antd";
import { ProLayout } from "@ant-design/pro-components";
import React, { useState, useEffect, useCallback } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FileDoneOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
// import classnames from "classnames";
// import propTypes from "prop-types";

import useAuthInfo from "@/hooks/useAuthInfo";

// import css from "./style.scss";
import css from "./style.less";
import router_config from "./configs/router_config";
import AvatarContent from "./components/AvatarContent";

export default function BasicLayout(props) {
  const navigate = useNavigate();
  const auth_info = useAuthInfo();
  const [collapsed, setCollapsed] = useState(false);

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname === "/") {
  //     navigate("/")
  //   }
  // }, [pathname, navigate]);

  const handleToCreatePostPosition = useCallback(() => {
    navigate("post_position_guider");
  }, [navigate]);

  const handleRightContentRender = useCallback(() => {
    return (
      <Space>
        <Button type="primary" icon={(<FileDoneOutlined />)} onClick={handleToCreatePostPosition}>投放广告</Button>
        <Popover
          trigger="click"
          title="用户信息"
          placement="bottomRight"
          arrowPointAtCenter
          content={(<AvatarContent {...auth_info} />)}
        >
          <Avatar icon={(<UserOutlined />)} />
        </Popover>
      </Space>
    )
  }, [auth_info]);

  const handleItemRender = useCallback((item, dom) => {
    return (
      <div onClick={() => navigate(item.path)}>{dom}</div>
    );
  }, [navigate]);

  return (
    <ProLayout
      fixSiderbar
      fixedHeader
      route={router_config}
      collapsed={collapsed}
      collapsedButtonRender={false}
      menuItemRender={handleItemRender}
      rightContentRender={handleRightContentRender}
      onCollapse={setCollapsed}
      headerContentRender={() => (
        <span onClick={() => setCollapsed(!collapsed)} style={{ cursor: "pointer", fontSize: "16px" }}>
          {collapsed ? (<MenuUnfoldOutlined />) : (<MenuFoldOutlined />)}
        </span>
      )}
    >
      <Outlet />
    </ProLayout>
  )
};


BasicLayout.propTypes = {


};
BasicLayout.defaultProps = {


};