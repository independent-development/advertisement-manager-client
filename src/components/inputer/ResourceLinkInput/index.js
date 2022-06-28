/* eslint-disable react/prop-types */
import React from "react";
import { Upload } from "antd";

// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import UploadInput from "@/components/inputer/UploadInput";
import RemoteURLInput from "@/components/inputer/RemoteURLInput";


export default function ResourceLinkInput(props) {
  const { content_type, resource_type, value, onChange, ...otherProps } = props;

  if (content_type === "HTML5") {
    return (
      <RemoteURLInput value={value} onChange={onChange} />
    )
  }
  if (resource_type === "OSS_URL") {
    return (
      <UploadInput value={value} onChange={onChange} />
    )
  }
  if (resource_type === "CUSTOM_URL") {
    return (
      <RemoteURLInput value={value} onChange={onChange} />
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