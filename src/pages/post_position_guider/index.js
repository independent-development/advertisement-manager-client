/* eslint-disable react/prop-types */
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState, useCallback } from "react";
import { ProCard, CheckCard } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import BannerFixed from "./components/BannerFixed";
import MessageCard from "./components/MessageCard";
import VideoPaster from "./components/VideoPaster";

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
        <BannerFixed />
        <MessageCard />
        <VideoPaster />
      </CheckCard.Group>
      <Button block size="large" type="primary" onClick={hendleNavigate}>开始投放</Button>
    </ProCard>
  )
};


PostPositionGuider.propTypes = {


};
PostPositionGuider.defaultProps = {


};