/* eslint-disable react/prop-types */
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import React, { useState, useCallback } from "react";

// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import upload_request from "@/utils/request/upload_request";
import get_filelist_detail from "@/utils/upload/get_filelist_detail";

export default function VideoUploadInput(props) {

  const { value, onChange, ...otherProps } = props;

  const [file_list, set_file_list] = useState(get_filelist_detail(value));

  const handleAction = useCallback(async ({ file: file_object }) => {
    const oss_url = await upload_request(file_object);
    await set_file_list(get_filelist_detail(oss_url));
    await onChange(oss_url);
    return oss_url;
  }, [onChange]);

  const handleChange = useCallback((info) => {
    console.log(info);
  }, []);

  const handleRemove = useCallback(async () => {
    await set_file_list([]);
    await onChange(oss_url);
  }, [onChange]);

  return (
    <Upload.Dragger
      accept=".mp4"
      showUploadList
      fileList={file_list}
      style={{ width: "50%" }}
      customRequest={handleAction}
      onChange={handleChange}
      onRemove={handleRemove}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        点击该区域上传文件
      </p>
      <p className="ant-upload-hint">
        目前仅支持mp4类型的文件
      </p>
    </Upload.Dragger>
  )
};


VideoUploadInput.propTypes = {

};
VideoUploadInput.defaultProps = {
  value: "",
  onChange() { }
};