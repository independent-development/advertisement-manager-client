import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "@/layouts";
import LoginPage from "@/pages/login_page";
import OrderManage from "@/pages/order_manage";
import CommodityRecord from "@/pages/commodity_record";
import CreateCommodityOrder from "@/pages/commodity_order/submodules/create_commodity_order";
import UserCenter from "@/pages/user_center";

export default () => {
  return (
    <Routes>
      <Route path="/login" element={(<LoginPage />)} />
      <Route path="/" element={(<BasicLayout />)}>
        <Route path="/create_commodity_order" element={(<CreateCommodityOrder />)} />
        <Route path="/order_manage" element={(<OrderManage />)} />
        <Route path="/commodity_record" element={(<CommodityRecord />)} />
        <Route path="/user_center" element={(<UserCenter />)} />
      </Route>
    </Routes>
  )
};