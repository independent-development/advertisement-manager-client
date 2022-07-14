import React from "react";
import { UserOutlined, LaptopOutlined, OrderedListOutlined, PayCircleOutlined } from "@ant-design/icons";

export default {
  path: "/",
  routes: [{
    name: "广告位",
    path: "/position",
    icon: (<OrderedListOutlined />),
    routes: [
      { name: "固定广告位", path: "/position/banner_fixed_position_record" },
      // {name: "视频贴片广告位",path: "/position/video_paster_position_record"},
      { name: "信息卡片广告位", path: "/position/message_card_position_record" }
    ]
  }, {
    name: "订单列表",
    path: "/order_record",
    icon: (<LaptopOutlined />)
  }, {
    name: "交易记录",
    path: "/transaction_record",
    icon: (<PayCircleOutlined />)
  }, {
    name: "用户中心",
    path: "/user_center",
    icon: (<UserOutlined />)
  }]
}