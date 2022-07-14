/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useCallback } from "react";

// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import upload_request from "@/utils/request/upload_request";
import get_filelist_detail from "@/utils/upload/get_filelist_detail";

export default function ImageUploadInput(props) {

  const { upload_url, value, onChange, length_width_ratio, ...otherProps } = props;

  const [file_list, set_file_list] = useState(get_filelist_detail(value));

  useEffect(() => {
    const format_list = get_filelist_detail(value);
    set_file_list(format_list);
  }, [value]);

  const handleAction = useCallback(async ({ file: file_object }) => {
    const upload_message_key = uuidv4();
    try {
      message.loading({ content: "正在上传... ...", key: upload_message_key, duration: 0 });
      const oss_url = await upload_request(upload_url, {
        file_object,
        length_width_ratio
      });
      console.log(oss_url);
      await set_file_list(get_filelist_detail(oss_url));
      await onChange(oss_url);
      message.success({ content: "上传成功", key: upload_message_key });
      return oss_url;
    } catch (error) {
      message.error({ content: error.message, key: upload_message_key });
    }
  }, [onChange, length_width_ratio]);

  const handleRemove = useCallback(async () => {
    await set_file_list([]);
    await onChange(null);
  }, [onChange]);

  return (
    <div style={{ width: "50%" }}>
      <Upload.Dragger
        showUploadList
        fileList={file_list}
        accept=".png,.jpg,.jpeg,.gif"
        onRemove={handleRemove}
        customRequest={handleAction}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          点击该区域上传文件
        </p>
        <p className="ant-upload-hint">
          支持png,jpg,jpeg和gif类型的文件
        </p>
      </Upload.Dragger>
      {file_list.map(({ uid, url }) => {
        return <img key={uid} height={200} src={url} />
      })}
    </div>
  )
};


ImageUploadInput.propTypes = {

};
ImageUploadInput.defaultProps = {
  value: "",
  onChange() { },
  async onUploadAction() { },
  length_width_ratio: ""
};