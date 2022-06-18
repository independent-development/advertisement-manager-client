/* eslint-disable react/prop-types */
import React, { useState, useCallback } from "react";
import { Avatar, Space, Button, Popover } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";
import { FileDoneOutlined, WalletOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
// import classnames from "classnames";
// import propTypes from "prop-types";

import useBalance from "@/hooks/useBalance";

// import css from "./style.scss";
import css from "./style.less";
import router_config from "./configs/router_config";
import AvatarContent from "./components/AvatarContent";

export default function BasicLayout(props) {
  const navigate = useNavigate();
  const [balance, get_balance] = useBalance();
  const [collapsed, setCollapsed] = useState(false);

  const handleRightContentRender = useCallback(() => {
    return (
      <Space>
        <Button type="primary" icon={(<FileDoneOutlined />)}>投放广告</Button>
        <Popover
          trigger="click"
          title="钱包信息"
          placement="bottomRight"
          arrowPointAtCenter
          onClick={get_balance}
          content={(<AvatarContent balance={balance} />)}
        >
          <Avatar icon={(<WalletOutlined />)} />
        </Popover>
      </Space>
    )
  }, [balance]);

  const handleItemRender = useCallback((item, dom) => {
    return (
      <div onClick={() => navigate(item.path)}>{dom}</div>
    );
  }, [navigate]);

  return (
    <ProLayout
      fixSiderbar
      route={router_config}
      collapsed={collapsed}
      collapsedButtonRender={false}
      menuItemRender={handleItemRender}
      rightContentRender={handleRightContentRender}
      onCollapse={setCollapsed}
      headerContentRender={() => (
        <div onClick={() => setCollapsed(!collapsed)} style={{ cursor: "pointer", fontSize: "16px" }}>
          {collapsed ? (<MenuUnfoldOutlined />) : (<MenuFoldOutlined />)}
        </div>
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