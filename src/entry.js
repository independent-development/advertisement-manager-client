import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "@/layouts";
import LoginPage from "@/pages/LoginPage";
import OrderManage from "@/pages/OrderManage";
import CommodityRecord from "@/pages/CommodityRecord";
import UserCenter from "@/pages/UserCenter";

export default () => {
  return (
    <Routes>
      <Route path="/login" element={(<LoginPage />)} />
      <Route path="/" element={(<BasicLayout />)}>
        <Route path="/order_manage" element={(<OrderManage />)} />
        <Route path="/commodity_record" element={(<CommodityRecord />)} />
        <Route path="/user_center" element={(<UserCenter />)} />
      </Route>
    </Routes>
  )
};