/* eslint-disable react/prop-types */
import React from "react";
import { Button, Input } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function RemoteURLInput(props) {
  const { value, onChange } = props;
  return (
    <Input.Group compact>
      <Input value={value} onChange={onChange} placeholder="请填写外部资源链接(必须带上http或者https前缀)" style={{ width: 500 }} allowClear />
      <Button type="primary" onClick={() => window.open(value)}>测试链接</Button>
    </Input.Group>
  )
};


RemoteURLInput.propTypes = {


};
RemoteURLInput.defaultProps = {
  value: "",
  onChange() { }
};