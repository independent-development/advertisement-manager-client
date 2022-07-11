/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

import ContentTypeRadio from "@/components/radios/ContentTypeRadio";
// import css from "./style.scss";
// import css from "./style.less";

const content_type = [{
  required: true,
  message: "请选择广告类型"
}];

export default function ContentType(props) {
  return (
    <Form.Item noStyle shouldUpdate>
      {(form) => {
        return (
          <Form.Item name="content_type" label="广告类型" rules={content_type}>
            <ContentTypeRadio form={form} />
          </Form.Item>
        )
      }}
    </Form.Item>
  )
};


ContentType.propTypes = {


};
ContentType.defaultProps = {


};