/* eslint-disable react/prop-types */
import { Button, message } from "antd";
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function TronLink(props) {

  const navigate = useNavigate();

  const handleConnectWallte = useCallback(async () => {
    if (!tronWeb.defaultAddress.base58) {
      return message.warning("请解锁钱包!");
    }
    const result = await tronLink.request({ method: "tron_requestAccounts" });
    if (result.code === 200) {
      navigate("/order_manage");
      message.success("连接成功!");
      console.log("tronWeb.defaultAddress.base58", tronWeb.defaultAddress.base58);
    } else {
      message.error(result.message);
    }
  }, [navigate]);

  const handleWallteCallback = useCallback(async () => {
    if (tronLink.ready) {
      await handleConnectWallte();
    }
  }, [handleConnectWallte]);

  useEffect(() => {
    handleWallteCallback();
    window.addEventListener('tronLink#initialized', handleWallteCallback);
    return () => {
      window.removeEventListener('tronLink#initialized', handleWallteCallback);
    };
  }, [handleWallteCallback]);

  return (
    <Button block type="primary" onClick={handleConnectWallte}>连接钱包进行登录</Button>
  )
};


TronLink.propTypes = {


};
TronLink.defaultProps = {


};