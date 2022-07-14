/* eslint-disable react/prop-types */
import { Tag, Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState, useCallback } from "react";
import { ProCard, CheckCard } from "@ant-design/pro-components";
import { PlayCircleOutlined, VideoCameraAddOutlined } from "@ant-design/icons";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import image_icon from "./assets/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg";

export default function PostPositionGuider(props) {
  const navigate = useNavigate();

  const [value, set_value] = useState("card");

  const hendleNavigate = useCallback(async () => {
    if (value === "fixed") {
      await navigate("/create_banner_fixed_position");
    }
    if (value === "card") {
      await navigate("/create_message_card_position");
    }
    if (value === "paster") {
      await navigate("/create_video_paster_position");
    }
  }, [value]);

  return (
    <ProCard title="选择广告位类型">
      <CheckCard.Group style={{ width: "100%" }} value={value} onChange={(value) => set_value(value)}>
        <CheckCard
          value="fixed"
          title="首页Banner位固定广告"
          avatar={image_icon}
          style={{ width: "100%", height: 100 }}
          description={(
            <div>
              在网站或者应用的的
              <strong style={{ color: "black" }}>首页Banner位上</strong>
              进行展示,收费较高
            </div>
          )}
        />
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
              以
              <strong style={{ color: "black" }}>16:9</strong>
              或者
              <strong style={{ color: "black" }}>4:3</strong>
              或者
              <strong style={{ color: "black" }}>1:1</strong>
              大小的卡片形式在<strong style={{ color: "black" }}>非首页之外</strong>
              的地方<strong style={{ color: "black" }}>以小卡片的形式</strong>
              进行展示
            </div>
          )}
        />
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
      </CheckCard.Group>
      <Button block size="large" type="primary" onClick={hendleNavigate}>开始投放</Button>
    </ProCard>
  )
};


PostPositionGuider.propTypes = {


};
PostPositionGuider.defaultProps = {


};