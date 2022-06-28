/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

import SubjectDetailSelect from "@/components/selecter/SubjectDetailSelect";

// import css from "./style.scss";
// import css from "./style.less";

const subject_detail = [{
  required: true,
  message: "请选择投放页面"
}];

export default function SubjectDetail(props) {
  return (
    <Form.Item name="subject_detail_page" label="投放页面" rules={subject_detail}>
      <SubjectDetailSelect />
    </Form.Item>
  )
};


SubjectDetail.propTypes = {


};
SubjectDetail.defaultProps = {


};