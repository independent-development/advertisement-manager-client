/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

import CalculateTypeSelect from "@/components/selecter/CalculateTypeSelect";
// import css from "./style.scss";
// import css from "./style.less";

const calculate_type = [{
  required: true,
  message: "请选择计费类型"
}];

export default function CalculateType(props) {
  return (
    <Form.Item name="calculate_type" label="计费方式" rules={calculate_type}>
      <CalculateTypeSelect />
    </Form.Item>
  )
};


CalculateType.propTypes = {


};
CalculateType.defaultProps = {


};