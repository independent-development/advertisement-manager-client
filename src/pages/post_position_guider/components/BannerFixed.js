/* eslint-disable react/prop-types */
import React from "react";
import { CheckCard } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import image_icon from "../assets/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg";

export default function BannerFixed(props) {
  return (
    <CheckCard
      value="fixed"
      title="首页Banner位固定广告"
      avatar={image_icon}
      style={{ width: "100%", height: 100 }}
      description={(
        <div>
          在网站或者应用的的
          <strong style={{ color: "black" }}>首页Banner位上</strong>
          <strong style={{ color: "black" }}>按照投放的先后顺序</strong>
          进行展示,收费较高
        </div>
      )}
    />
  )
};


BannerFixed.propTypes = {


};
BannerFixed.defaultProps = {


};