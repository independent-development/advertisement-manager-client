import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "@/layouts";

import LoginPage from "@/pages/login_page";
import ForgetPage from "@/pages/forget_page";
import RegistryPage from "@/pages/registry_page";

import UserCenter from "@/pages/user_center";
import OrderManage from "@/pages/order_manage";
import CommodityRecord from "@/pages/commodity_record";
import TransactionRecorsd from "@/pages/transaction_recorsd";
import CreateCommodityOrder from "@/pages/commodity_order/submodules/create_commodity_order";


export default () => {
  return (
    <Routes>
      <Route path="/login" element={(<LoginPage />)} />
      <Route path="/forget" element={(<ForgetPage />)} />
      <Route path="/registry" element={(<RegistryPage />)} />
      <Route path="/" element={(<BasicLayout />)}>
        <Route path="/user_center" element={(<UserCenter />)} />
        <Route path="/order_manage" element={(<OrderManage />)} />
        <Route path="/commodity_record" element={(<CommodityRecord />)} />
        <Route path="/transaction_recorsd" element={(<TransactionRecorsd />)} />
        <Route path="/create_commodity_order" element={(<CreateCommodityOrder />)} />
      </Route>
    </Routes>
  )
};