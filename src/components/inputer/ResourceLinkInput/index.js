/* eslint-disable react/prop-types */
import React from "react";

// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";
import ImageUploadInput from "@/components/inputer/ImageUploadInput";

export default function ResourceLinkInput(props) {
  const { value, onChange, length_width_ratio, ...otherProps } = props;
  return (
    <ImageUploadInput {...otherProps} length_width_ratio={length_width_ratio} value={value} onChange={onChange} />
  )
};


ResourceLinkInput.propTypes = {


};
ResourceLinkInput.defaultProps = {
  value: "",
  onChange() { }
};