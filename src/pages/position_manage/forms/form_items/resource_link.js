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
          <Form.Item name="resource_link" label="资源链接" rules={resource_link}>
            <ResourceLinkInput content_type={getFieldValue("content_type")} resource_type={getFieldValue("resource_type")} />
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