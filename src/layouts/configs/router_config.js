import React from "react";
import { UserOutlined, LaptopOutlined, OrderedListOutlined, PayCircleOutlined } from "@ant-design/icons";

export default {
  path: "/",
  routes: [{
    path: "/commodity_record",
    name: "广告列表",
    icon: (<LaptopOutlined />)
  }, {
    path: "/transaction_record",
    name: "交易记录",
    icon: (<PayCircleOutlined />)
  }, {
    path: "/user_center",
    name: "用户中心",
    icon: (<UserOutlined />)
  }]
}