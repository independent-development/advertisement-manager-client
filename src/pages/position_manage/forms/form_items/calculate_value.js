/* eslint-disable react/prop-types */
import React from "react";
import { Form, InputNumber } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

const addonAfter = {
  "YEAR": "年",
  "MONTH": "月",
  "DAY": "天",
  "HOUR": "小时"
};

const calculate_value = [{
  required: true,
  message: "请填写计费周期"
}];

export default function CalculateValue(props) {
  return (
    <Form.Item noStyle shouldUpdate>
      {({ getFieldValue }) => {
        const calculate_type = getFieldValue("calculate_type");
        return (
          <Form.Item name="calculate_value" label="展示周期" rules={calculate_value}>
            <InputNumber min={1} style={{ width: 400 }} addonAfter={calculate_type ? addonAfter[calculate_type] : ""} />
          </Form.Item>
        )
      }}
    </Form.Item>
  )
};


CalculateValue.propTypes = {


};
CalculateValue.defaultProps = {


};