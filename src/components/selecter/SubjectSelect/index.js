/* eslint-disable react/prop-types */
import React from "react";
import { Select } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function SubjectSelect(props) {
  const { value, onChange, ...otherProps } = props;
  return (
    <Select value={value} onChange={onChange} {...otherProps}>
      {null}
    </Select>
  )
};


SubjectSelect.propTypes = {


};
SubjectSelect.defaultProps = {
  value: "",
  onChange() { },
  pleaceholder: "请选择本站的主题"
};