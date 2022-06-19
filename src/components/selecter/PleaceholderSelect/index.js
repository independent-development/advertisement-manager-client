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
          <Checkbox style={{ width: 150 }} value="HOME_TOP">主页头部</Checkbox>
          <Checkbox style={{ width: 150 }} value="HOME_BOTTOM">主页底部</Checkbox>
          <Checkbox style={{ width: 150 }} value="HOME_LEFT">主页左侧</Checkbox>
          <Checkbox style={{ width: 150 }} value="HOME_RIGHT">主页右侧</Checkbox>
        </Space>
        <Space>
          <Checkbox style={{ width: 150 }} value="DETAIL_TOP">详情页顶部</Checkbox>
          <Checkbox style={{ width: 150 }} value="DETAIL_BOTTOM">详情页底部</Checkbox>
          <Checkbox style={{ width: 150 }} value="DETAIL_LEFT">详情页左侧</Checkbox>
          <Checkbox style={{ width: 150 }} value="DETAIL_RIGHT">详情页右侧</Checkbox>
        </Space>
        <Space>
          <Checkbox style={{ width: 150 }} value="PLAY_START">播放开始</Checkbox>
          <Checkbox style={{ width: 150 }} value="PLAY_END">播放结束</Checkbox>
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