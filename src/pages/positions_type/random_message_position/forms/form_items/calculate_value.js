/* eslint-disable react/prop-types */
import React from "react";
import { Form, InputNumber } from "antd";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

const calculate_value = [{
  required: true,
  message: "请填写计费周期"
}];

export default function CalculateValue(props) {
  return (
    <Form.Item name="calculate_value" label="展示次数" rules={calculate_value}>
      <InputNumber
        min={1000}
        style={{ width: 400 }}
        formatter={value => parseInt(value)}
        addonAfter="次"
      />
    </Form.Item>
  )
};


CalculateValue.propTypes = {


};
CalculateValue.defaultProps = {


};