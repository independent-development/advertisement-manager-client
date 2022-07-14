/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
import validator from "validator";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import OpenLinkURLInput from "@/components/inputer/OpenLinkURLInput";

const link_url = [{
  required: false,
  async validator(rule, value) {
    if (!value) {
      return Promise.resolve();
    }
    if (validator.isURL(value)) {
      return Promise.resolve();
    }
    throw new Error('请检查跳转链接的格式!');
  },
  message: "请检查跳转链接的格式!",
}];

export default function OpenLinkURL(props) {
  return (
    <Form.Item name="open_link_url" label="跳转链接" rules={link_url} validateTrigger="onBlur">
      <OpenLinkURLInput />
    </Form.Item>
  )
};


OpenLinkURL.propTypes = {


};
OpenLinkURL.defaultProps = {


};