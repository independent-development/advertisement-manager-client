/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

import PleaceholderRadio from "@/components/radios/PleaceholderRadio";

// import css from "./style.scss";
// import css from "./style.less";

const pleaceholder = [{
  required: true,
  message: "请选择展示位置"
}];

export default function Placeholder(props) {
  return (
    <Form.Item name="position_value" label="投放位置" rules={pleaceholder}>
      <PleaceholderRadio />
    </Form.Item>
  )
};


Placeholder.propTypes = {


};
Placeholder.defaultProps = {


};