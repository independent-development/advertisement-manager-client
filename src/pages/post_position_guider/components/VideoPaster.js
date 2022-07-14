/* eslint-disable react/prop-types */
import React from "react";
import { Tag, Avatar } from "antd";
import { CheckCard } from "@ant-design/pro-components";
import { VideoCameraAddOutlined } from "@ant-design/icons";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export default function VideoPaster(props) {
  return (
    <CheckCard
      disabled
      value="paster"
      title={(
        <div>
          <span>视频贴片广告位</span>
          <Tag color="default">暂未上线</Tag>
        </div>
      )}
      avatar={(
        <Avatar size={55} style={{ backgroundColor: "#3b5999" }} icon={(<VideoCameraAddOutlined style={{ fontSize: 40, marginTop: 8 }} />)} />
      )}
      style={{ width: "100%", height: 100 }}
      description={(
        <div>
          在网站<strong style={{ color: "black" }}>视频播放前</strong>
          或<strong style={{ color: "black" }}>播放途中</strong>插入的广告
        </div>
      )}
    />
  )
};


VideoPaster.propTypes = {


};
VideoPaster.defaultProps = {


};