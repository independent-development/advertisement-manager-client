/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

import ResourceLinkInput from "@/components/inputer/ResourceLinkInput";
// import css from "./style.scss";
// import css from "./style.less";

const resource_link = [{
  required: true,
  message: "请上传资源或填写外部链接"
}];

export default function ResourceLink(props) {
  return (
    <Form.Item noStyle shouldUpdate>
      {({ getFieldValue }) => {
        return (
          <Form.Item name="resource_link" label="资源内容" rules={resource_link}>
            <ResourceLinkInput length_width_ratio={getFieldValue("length_width_ratio")} />
          </Form.Item>
        )
      }}
    </Form.Item>
  )
};


ResourceLink.propTypes = {


};
ResourceLink.defaultProps = {


};