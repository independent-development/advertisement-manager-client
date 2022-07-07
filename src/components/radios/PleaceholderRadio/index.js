/* eslint-disable react/prop-types */
import React from "react";
import { Radio, Space } from "antd";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export default function PleaceholderRadio(props) {
  const { value, onChange, ...otherProps } = props;
  return (
    <Radio.Group value={value} onChange={onChange} {...otherProps}>
      <Space direction="vertical">
        <Space>
          <Radio style={{ width: 150 }} value="PAGE_TOP">页面顶部</Radio>
          <Radio style={{ width: 150 }} value="PAGE_BOTTOM">页面底部</Radio>
          <Radio style={{ width: 150 }} value="PAGE_LEFT">页面左侧</Radio>
          <Radio style={{ width: 150 }} value="PAGE_RIGHT">页面右侧</Radio>
        </Space>
        <Space>
          <Radio style={{ width: 150 }} value="VIDEO_START">视频片头</Radio>
          <Radio style={{ width: 150 }} value="VIDEO_END">视频片尾</Radio>
        </Space>
      </Space>
    </Radio.Group>
  )
};


PleaceholderRadio.propTypes = {

};
PleaceholderRadio.defaultProps = {
  value: "",
  onChange() { }
};