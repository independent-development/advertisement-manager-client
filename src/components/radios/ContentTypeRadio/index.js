/* eslint-disable react/prop-types */
import { Radio } from "antd";
import React, { useCallback } from "react";
import { VideoCameraOutlined, FileImageOutlined, Html5Outlined } from "@ant-design/icons";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function ContentTypeRadio(props) {
  const { form, value, onChange, ...otherProps } = props;

  const handleChange = useCallback(async (value) => {
    await form.setFieldsValue({ "resource_link": "" });
    await onChange(value);
  }, [form, onChange]);

  return (
    <Radio.Group value={value} onChange={handleChange} {...otherProps}>
      <Radio.Button value="IMAGE" style={{ width: 100, textAlign: "center" }}>
        <FileImageOutlined />
        <span>图片</span>
      </Radio.Button>
      <Radio.Button value="VIDEO" style={{ width: 100, textAlign: "center" }}>
        <VideoCameraOutlined />
        <span>视频</span>
      </Radio.Button>
      <Radio.Button value="HTML5" style={{ width: 100, textAlign: "center" }}>
        <Html5Outlined />
        <span>HTML5</span>
      </Radio.Button>
    </Radio.Group>
  )
};


ContentTypeRadio.propTypes = {


};
ContentTypeRadio.defaultProps = {
  value: "",
  buttonStyle: "solid",
  onChange() { }
};