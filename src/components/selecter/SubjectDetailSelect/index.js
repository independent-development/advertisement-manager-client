/* eslint-disable react/prop-types */
import { Select, Input } from "antd";
import React, { useState, useEffect, useCallback } from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

export default function SubjectDetailSelect(props) {
  const { value, onChange, ...otherProps } = props;

  const [subject, set_subject] = useState(value[0]);
  const [content, set_content] = useState(value[1]);

  const handleChangeSubject = useCallback((value) => {
    set_subject(value);
    onChange([value, content]);
  }, [content, onChange]);

  const handleChangeContent = useCallback((value) => {
    set_content(value);
    onChange([subject, value]);
  }, [subject, onChange]);

  return (
    <Input.Group compact>
      <Select value={subject} onChange={handleChangeSubject} style={{ width: 150 }}>
        <Select.Option value="subject1">主题1</Select.Option>
        <Select.Option value="subject2">主题2</Select.Option>
        <Select.Option value="subject3">主题3</Select.Option>
        <Select.Option value="subject4">主题4</Select.Option>
      </Select>
      <Select value={content} onChange={handleChangeContent} style={{ width: 150 }}>
        <Select.Option value="content1">内容1</Select.Option>
        <Select.Option value="content2">内容2</Select.Option>
        <Select.Option value="content3">内容3</Select.Option>
        <Select.Option value="content4">内容4</Select.Option>
      </Select>
    </Input.Group>
  )
};


SubjectDetailSelect.propTypes = {


};
SubjectDetailSelect.defaultProps = {
  value: [],
  onChange() { },
};