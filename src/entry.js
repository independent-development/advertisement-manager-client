import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "@/layouts";

import LoginPage from "@/pages/login_page";
import ForgetPage from "@/pages/forget_page";
import RegistryPage from "@/pages/registry_page";

import UserCenter from "@/pages/user_center";
import OrderRecord from "@/pages/order_record";
import PositionRecord from "@/pages/position_record";
import TransactionRecord from "@/pages/transaction_record";

import EditPosition from "@/pages/position_manage/submodules/edit_position";
import CreatePosition from "@/pages/position_manage/submodules/create_position";


export default () => {
  return (
    <Routes>
      <Route path="/login" element={(<LoginPage />)} />
      <Route path="/forget" element={(<ForgetPage />)} />
      <Route path="/registry" element={(<RegistryPage />)} />
      <Route path="/" element={(<BasicLayout />)}>
        <Route path="/edit_position" element={(<EditPosition />)} />
        <Route path="/create_position" element={(<CreatePosition />)} />
        <Route path="/order_record" element={(<OrderRecord />)} />
        <Route path="/position_record" element={(<PositionRecord />)} />
        <Route path="/transaction_record" element={(<TransactionRecord />)} />
        <Route path="/user_center" element={(<UserCenter />)} />
      </Route>
    </Routes>
  )
};