/* eslint-disable react/prop-types */
import React from "react";
import { Checkbox, Space } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function PleaceholderSelect(props) {
  const { value, onChange, ...otherProps } = props;
  return (
    <Checkbox.Group value={value} onChange={onChange} {...otherProps}>
      <Space direction="vertical">
        <Space>
          <Checkbox style={{ width: 150 }} value="PAGE_TOP">页面顶部</Checkbox>
          <Checkbox style={{ width: 150 }} value="PAGE_BOTTOM">页面底部</Checkbox>
          <Checkbox style={{ width: 150 }} value="PAGE_LEFT">页面左侧</Checkbox>
          <Checkbox style={{ width: 150 }} value="PAGE_RIGHT">页面右侧</Checkbox>
        </Space>
        <Space>
          <Checkbox style={{ width: 150 }} value="PLAY_START">视频片头</Checkbox>
          <Checkbox style={{ width: 150 }} value="PLAY_END">视频片尾</Checkbox>
        </Space>
      </Space>
    </Checkbox.Group>
  )
};


PleaceholderSelect.propTypes = {

};
PleaceholderSelect.defaultProps = {
  value: "",
  onChange() { }
};