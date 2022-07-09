/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Tag, Avatar, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { ProCard, CheckCard } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import image_icon from "./assets/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg";

export default function PostPositionGuider(props) {
  const [value, set_value] = useState("random");
  return (
    <ProCard title="选择广告位类型">
      <CheckCard.Group value={value} onChange={(value) => set_value(value)}>
        <CheckCard
          value="random"
          title={(
            <div>
              <span style={{ marginRight: 10 }}>随机广告位</span>
              <Tag color="green">推荐</Tag>
            </div>
          )}
          avatar={(
            <Avatar size={55} style={{ backgroundColor: "#f56a00" }} icon={(<PlayCircleOutlined style={{ fontSize: 55 }} />)} />
          )}
          style={{ width: 500, height: 100 }}
          description={(
            <div>
              在<strong style={{ color: "black" }}>详情页</strong>中根据
              <strong style={{ color: "black" }}>优先级</strong>随机展示一定的次数,
              只支持<strong style={{ color: "black" }}>按量计费</strong>
            </div>
          )}
        />
        <CheckCard
          value="fixed"
          title="固定广告位"
          avatar={image_icon}
          style={{ width: 500, height: 100 }}
          description={(
            <div>
              在网站或者应用的的
              <strong style={{ color: "black" }}>特定页面</strong>的
              <strong style={{ color: "black" }}>固定广告</strong>
              位上进行展示,收费较高,支持
              <strong style={{ color: "black" }}>按量计费</strong>和
              <strong style={{ color: "black" }}>定价计费</strong>
            </div>
          )}
        />
      </CheckCard.Group>
      <Button block size="large" type="primary">开始投放</Button>
    </ProCard>
  )
};


PostPositionGuider.propTypes = {


};
PostPositionGuider.defaultProps = {


};