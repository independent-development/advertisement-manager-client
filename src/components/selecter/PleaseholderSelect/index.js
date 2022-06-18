/* eslint-disable react/prop-types */
import React from "react";
import { Radio } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function PleaseholderSelect(props) {
  const { ...otherProps } = props;
  return (
    <Radio.Group {...otherProps}>
      <Radio.Button value="HOME_TOP">主页头部</Radio.Button>
      <Radio.Button value="HOME_BOTTOM">主页底部</Radio.Button>
      <Radio.Button value="HOME_LEFT">主页左侧</Radio.Button>
      <Radio.Button value="HOME_RIGHT">主页右侧</Radio.Button>
    </Radio.Group>
  )
};


PleaseholderSelect.propTypes = {


};
PleaseholderSelect.defaultProps = {
  defaultValue: "HOME_TOP"
};