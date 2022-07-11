/* eslint-disable react/prop-types */
import React from "react";
import { Form, Input } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

const title = [{
  max: 36,
  required: false,
  message: "请检查广告标题的长度"
}];

export default function CommodityTitle(props) {
  return (
    <Form.Item name="title" label="广告标题" rules={title}>
      <Input placeholder="请输入广告标题(最大36个字符)" />
    </Form.Item>
  )
};


CommodityTitle.propTypes = {


};
CommodityTitle.defaultProps = {


};