/* eslint-disable react/prop-types */
import React, { useEffect, useCallback } from "react";
import { Radio } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function ResourceTypeRadio(props) {
  const { value, onChange, form, content_type, ...otherProps } = props;

  useEffect(() => {
    if (content_type === "HTML5") {
      form.setFieldsValue({ "resource_type": "URL" });
    };
  }, [form, content_type]);

  if (content_type === "HTML5") {
    return (
      <Radio.Group value={value} onChange={onChange}  {...otherProps}>
        <Radio.Button value="URL" style={{ width: 300, textAlign: "center" }}>外部链接</Radio.Button>
      </Radio.Group>
    )
  }
  return (
    <Radio.Group value={value} onChange={onChange} {...otherProps}>
      <Radio.Button value="OSS" style={{ width: 150, textAlign: "center" }}>上传文件</Radio.Button>
      <Radio.Button value="URL" style={{ width: 150, textAlign: "center" }}>外部链接</Radio.Button>
    </Radio.Group>
  )
};


ResourceTypeRadio.propTypes = {


};
ResourceTypeRadio.defaultProps = {
  value: "",
  buttonStyle: "solid",
  onChange() { }
};