/* eslint-disable react/prop-types */
import { Radio } from "antd";
import React, { useEffect, useCallback } from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function ResourceLinkTypeRadio(props) {
  const { value, onChange, form, content_type, ...otherProps } = props;

  useEffect(() => {
    if (content_type === "HTML5") {
      form.setFieldsValue({ "resource_type": "CUSTOM_URL" });
    };
  }, [form, content_type]);

  const handleChange = useCallback(async (value) => {
    await form.setFieldsValue({ "resource_link": "" });
    await onChange(value);
  }, [form, onChange]);

  if (content_type === "HTML5") {
    return (
      <Radio.Group value={value} onChange={handleChange}  {...otherProps}>
        <Radio.Button value="CUSTOM_URL" style={{ width: 300, textAlign: "center" }}>外部链接</Radio.Button>
      </Radio.Group>
    )
  }
  return (
    <Radio.Group value={value} onChange={handleChange} {...otherProps}>
      <Radio.Button value="OSS_URL" style={{ width: 150, textAlign: "center" }}>上传文件</Radio.Button>
      <Radio.Button value="CUSTOM_URL" style={{ width: 150, textAlign: "center" }}>外部链接</Radio.Button>
    </Radio.Group>
  )
};


ResourceLinkTypeRadio.propTypes = {


};
ResourceLinkTypeRadio.defaultProps = {
  value: "",
  buttonStyle: "solid",
  onChange() { }
};