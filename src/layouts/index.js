/* eslint-disable react/prop-types */
import { Avatar, Space, Button, Popover } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";
import React, { useState, useEffect, useCallback } from "react";
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

  const handleRedirect = useCallback(() => {
    !tronWeb.defaultAddress.base58 ? navigate("/login") : void (0);
  }, [navigate]);

  useEffect(() => {
    window.addEventListener("tronLink#initialized", handleRedirect);
    return () => window.removeEventListener("tronLink#initialized", handleRedirect);
  }, [handleRedirect]);

  const handleToCreateCommodityOrder = useCallback(() => {
    navigate("create_commodity_order");
  }, [navigate]);

  const handleRightContentRender = useCallback(() => {
    return (
      <Space>
        <Button type="primary" icon={(<FileDoneOutlined />)} onClick={handleToCreateCommodityOrder}>投放广告</Button>
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