/* eslint-disable react/prop-types */
import React from "react";

// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import RemoteURLInput from "@/components/inputer/RemoteURLInput";
import ImageUploadInput from "@/components/inputer/ImageUploadInput";
import VideoUploadInput from "@/components/inputer/VideoUploadInput";

export default function ResourceLinkInput(props) {
  const { content_type, resource_type, value, onChange, ...otherProps } = props;

  if (resource_type === "CUSTOM_URL") {
    return (
      <RemoteURLInput value={value} onChange={onChange} {...otherProps} />
    )
  }

  if (content_type === "VIDEO") {
    return (
      <VideoUploadInput value={value} onChange={onChange} {...otherProps} />
    )
  }

  if (content_type === "IMAGE") {
    return (
      <ImageUploadInput value={value} onChange={onChange} {...otherProps} />
    )
  }

  if (content_type === "HTML5") {
    return (
      <RemoteURLInput value={value} onChange={onChange} {...otherProps} />
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