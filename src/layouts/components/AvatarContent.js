/* eslint-disable react/prop-types */
import { Space } from "antd";
import React from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";


export default function AvatarContent({ balance }) {

  return (
    <Space direction="vertical">
      <div>{tronWeb.defaultAddress.base58}</div>
      <div>{`USDT:${balance}`}</div>
    </Space>
  )
};


AvatarContent.propTypes = {


};
AvatarContent.defaultProps = {


};