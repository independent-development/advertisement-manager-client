/* eslint-disable react/prop-types */
import React from "react";
import { Upload, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function ResourceLink(props) {
  const { content_type, resource_type, value, onChange, ...otherProps } = props;
  if (content_type === "HTML5") {
    return (
      <Input placeholder="请填写外部资源链接" />
    )
  }
  if (resource_type === "OSS") {
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
  if (resource_type === "URL") {
    return (
      <Input placeholder="请填写外部资源链接" />
    )
  }
  return null;
};


ResourceLink.propTypes = {


};
ResourceLink.defaultProps = {
  value: "",
  onChange() { }
};