/* eslint-disable react/prop-types */
import React from "react";
import { Tag, Avatar } from "antd";
import { CheckCard } from "@ant-design/pro-components";
import { PlayCircleOutlined } from "@ant-design/icons";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export default function MessageCard(props) {
  return (
    <CheckCard
      value="card"
      title={(
        <div>
          <span style={{ marginRight: 10 }}>信息卡片广告位</span>
          <Tag color="green">推荐</Tag>
        </div>
      )}
      avatar={(
        <Avatar size={55} style={{ backgroundColor: "#f56a00" }} icon={(<PlayCircleOutlined style={{ fontSize: 44, marginTop: 6 }} />)} />
      )}
      style={{ width: "100%", height: 100 }}
      description={(
        <div>
          按照
          <strong style={{ color: "black" }}>16:9</strong>或者
          <strong style={{ color: "black" }}>4:3</strong>或者
          <strong style={{ color: "black" }}>1:1</strong>
          大小的卡片形式在<strong style={{ color: "black" }}>非首页之外</strong>
          的地方<strong style={{ color: "black" }}>以小卡片的形式</strong>
          在每个页面<strong style={{ color: "black" }}>按照投放的先后顺序</strong>
          进行展示
        </div>
      )}
    />
  )
};


MessageCard.propTypes = {


};
MessageCard.defaultProps = {


};