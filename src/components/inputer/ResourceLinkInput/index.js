/* eslint-disable react/prop-types */
import React from "react";
import { Upload, Button, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function ResourceLinkInput(props) {
  const { content_type, resource_type, value, onChange, ...otherProps } = props;
  if (content_type === "HTML5") {
    return (
      <Input.Group compact>
        <Input value={value} onChange={onChange} placeholder="请填写外部资源链接(必须带上http或者https前缀)" style={{ width: 500 }} />
        <Button type="primary" onClick={() => window.open(value)}>测试链接</Button>
      </Input.Group>
    )
  }
  if (resource_type === "OSS_URL") {
    return (
      <Upload.Dragger {...otherProps} style={{ width: "50%" }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击该区域上传文件</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Upload.Dragger>
    )
  }
  if (resource_type === "CUSTOM_URL") {
    return (
      <Input.Group compact>
        <Input value={value} onChange={onChange} placeholder="请填写外部资源链接(必须带上http或者https前缀)" style={{ width: 500 }} />
        <Button type="primary" onClick={() => window.open(value)}>测试链接</Button>
      </Input.Group>
    )
  }
  return null;
};


ResourceLinkInput.propTypes = {


};
ResourceLinkInput.defaultProps = {
  value: "",
  onChange() { }
};