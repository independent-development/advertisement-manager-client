/* eslint-disable react/prop-types */
import React from "react";
import { Alert, Space, Button } from "antd";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export default function TopMessage(props) {
  const { check_wallet_status, check_status_message, activate_status } = props;
  if (check_wallet_status === "READY") {
    return (
      <Space style={{ width: "100%" }} direction="vertical">
        <Alert message="支付过程中请勿关闭此页面" type="warning" showIcon />
        {{
          "ACTIVED": (
            <Alert message="钱包已就位" type="success" showIcon />
          ),
          "REACTIVE": (
            <Alert
              showIcon
              type="error"
              message="请重新激活钱包"
              description={(<Button type="primary">重新激活</Button>)}
            />
          )
        }[activate_status]}
      </Space>
    )
  } else {
    return (
      <Space style={{ width: "100%" }} direction="vertical">
        <Alert message="支付过程中请勿关闭此页面" type="warning" showIcon />
        {{
          "READY": (
            <Alert message={check_status_message} type="success" showIcon />
          ),
          "NOACTIVED": (
            <Alert message={check_status_message} type="error" showIcon />
          ),
          "HOSTERROR": (
            <Alert message={check_status_message} type="error" showIcon />
          ),
          "NOINSTALL": (
            <Alert
              showIcon
              type="error"
              message="请安装TronLink钱包"
              description={(
                <Space>
                  <Button type="primary" onClick={() => window.open("https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec")}>前往安装</Button>
                  <Button type="primary" onClick={() => window.location.reload()}>已经安装,点击刷新</Button>
                </Space>
              )}
            />
          )
        }[check_wallet_status]}
      </Space>
    )
  }
};


TopMessage.propTypes = {


};
TopMessage.defaultProps = {


};