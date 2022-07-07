import React from "react";
import { UserOutlined, LaptopOutlined, OrderedListOutlined, PayCircleOutlined } from "@ant-design/icons";

export default {
  path: "/",
  routes: [{
    path: "/order_manage",
    name: "订单列表",
    icon: (<OrderedListOutlined />),
  }, {
    path: "/commodity_record",
    name: "广告列表",
    icon: (<LaptopOutlined />)
  }, {
    path: "/transaction_recorsd",
    name: "交易列表",
    icon: (<PayCircleOutlined />)
  }, {
    path: "/user_center",
    name: "用户中心",
    icon: (<UserOutlined />)
  }]
}