/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

import ResourceTypeRadio from "@/components/radios/ResourceTypeRadio";
// import css from "./style.scss";
// import css from "./style.less";

const resource_type = [{
  required: true,
  message: "请选择资源类型"
}];

export default function ResourceType(props) {
  return (
    <Form.Item noStyle shouldUpdate>
      {(form) => {
        return (
          <Form.Item name="resource_type" label="资源类型" rules={resource_type}>
            <ResourceTypeRadio form={form} content_type={form.getFieldValue("content_type")} />
          </Form.Item>
        )
      }}
    </Form.Item>
  )
};


ResourceType.propTypes = {


};
ResourceType.defaultProps = {


};