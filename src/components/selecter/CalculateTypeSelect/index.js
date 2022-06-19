/* eslint-disable react/prop-types */
import React from "react";
import { Select } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function CalculateTypeSelect(props) {
  const { value, onChange, ...otherProps } = props;
  return (
    <Select value={value} onChange={onChange} {...otherProps}>
      <Select.Option value="YEAR">按年计费</Select.Option>
      <Select.Option value="MONTH">按月计费</Select.Option>
      <Select.Option value="DAY">按天计费</Select.Option>
      <Select.Option value="AMOUNT">按次计费</Select.Option>
    </Select>
  )
};


CalculateTypeSelect.propTypes = {


};
CalculateTypeSelect.defaultProps = {
  value: "",
  onChange() { },
  placeholder: "请选择计费标准"
};