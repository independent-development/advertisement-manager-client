import React from "react";
import { UserOutlined, LaptopOutlined, OrderedListOutlined, PayCircleOutlined } from "@ant-design/icons";

export default {
  path: "/",
  routes: [{
    name: "广告位",
    path: "/position_record",
    icon: (<OrderedListOutlined />)
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