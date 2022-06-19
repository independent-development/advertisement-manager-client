/* eslint-disable react/prop-types */
import React from "react";
import { Form, Input } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

const discription = [{
  max: 200,
  required: false,
  message: "请检查广告描述文案的长度"
}];

export default function CommodityDiscription(props) {
  return (
    <Form.Item name="discription" label="广告描述" rules={discription}>
      <Input.TextArea style={{ resize: "none" }} rows={4} placeholder="请输入广告描述(最大200个字符)" />
    </Form.Item>
  )
};


CommodityDiscription.propTypes = {


};
CommodityDiscription.defaultProps = {


};