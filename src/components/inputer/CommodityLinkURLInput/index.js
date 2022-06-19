/* eslint-disable react/prop-types */
import React from "react";
import { Input, Button } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function CommodityLinkURLInput(props) {
  const { value, onChange, ...otherProps } = props;
  return (
    <Input.Group compact>
      <Input value={value} onChange={onChange} style={{ width: 500 }} placeholder="请输入广告需要跳转的链接URL(http://或https://)"{...otherProps} />
      <Button type="primary" onClick={() => window.open(value)}>测试链接</Button>
    </Input.Group>
  )
};


CommodityLinkURLInput.propTypes = {

};
CommodityLinkURLInput.defaultProps = {
  value: "",
  onChange() { }
};