/* eslint-disable react/prop-types */
import React from "react";

// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";
import ImageUploadInput from "@/components/inputer/ImageUploadInput";

export default function ResourceLinkInput(props) {
  const { content_type, resource_type, value, onChange, ...otherProps } = props;

  return (
    <ImageUploadInput value={value} onChange={onChange} {...otherProps} />
  )
};


ResourceLinkInput.propTypes = {


};
ResourceLinkInput.defaultProps = {
  value: "",
  onChange() { }
};