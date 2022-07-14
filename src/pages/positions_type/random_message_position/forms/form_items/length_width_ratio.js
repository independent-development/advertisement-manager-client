/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import LengthWidthRatioRadio from "@/components/radios/LengthWidthRatioRadio";

const rules = [{
  required: true, message: "请选择内容长宽比"
}];

export default function LengthWidthRatio(props) {
  return (
    <Form.Item label="内容长宽比" name="length_width_ratio" rules={rules}>
      <LengthWidthRatioRadio />
    </Form.Item>
  )
};


LengthWidthRatio.propTypes = {


};
LengthWidthRatio.defaultProps = {


};