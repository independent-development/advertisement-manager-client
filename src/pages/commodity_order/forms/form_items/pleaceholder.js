/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

import PleaceholderSelect from "@/components/selecter/PleaceholderSelect";

// import css from "./style.scss";
// import css from "./style.less";

const pleaceholder = [{
  required: true,
  message: "请选择展示位置"
}];

export default function Placeholder(props) {
  return (
    <Form.Item name="pleaceholder" label="展示位置" rules={pleaceholder}>
      <PleaceholderSelect />
    </Form.Item>
  )
};


Placeholder.propTypes = {


};
Placeholder.defaultProps = {


};