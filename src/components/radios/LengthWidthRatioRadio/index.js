/* eslint-disable react/prop-types */
import React from "react";
import { Radio } from "antd";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export default function LengthWidthRatioRadio(props) {
  const { value, onChange, ...otherProps } = props;
  return (
    <Radio.Group buttonStyle="solid" value={value} onChange={onChange} {...otherProps}>
      <Radio.Button value="W16H9">16:9</Radio.Button>
      <Radio.Button value="W4H3">4:3</Radio.Button>
      <Radio.Button value="W1H1">1:1</Radio.Button>
    </Radio.Group>
  )
};


LengthWidthRatioRadio.propTypes = {


};
LengthWidthRatioRadio.defaultProps = {
  onChange() { }
};