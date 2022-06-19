/* eslint-disable react/prop-types */
import React from "react";
import { Radio } from "antd";
import { VideoCameraOutlined, FileImageOutlined, Html5Outlined } from "@ant-design/icons";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function ContentTypeRadio(props) {
  const { value, onChange, ...otherProps } = props;
  return (
    <Radio.Group value={value} onChange={onChange} {...otherProps}>
      <Radio.Button value="VIDEO">
        <VideoCameraOutlined />
        <span>视频</span>
      </Radio.Button>
      <Radio.Button value="IMAGE">
        <FileImageOutlined />
        <span>图片</span>
      </Radio.Button>
      <Radio.Button value="HTML5">
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