import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "@/layouts";

import LoginPage from "@/pages/login_page";
import ForgetPage from "@/pages/forget_page";
import RegistryPage from "@/pages/registry_page";

import UserCenter from "@/pages/user_center";
import OrderRecord from "@/pages/order_record";
import TransactionRecord from "@/pages/transaction_record";

import PositionRecord from "@/pages/positions/position_record";
import PostPositionGuider from "@/pages/positions/post_position_guider";

import EditFixedPosition from "@/pages/positions/fixed_position/submodules/edit_fixed_position";
import CreateFixedPosition from "@/pages/positions/fixed_position/submodules/create_fixed_position";


export default () => {
  return (
    <Routes>
      <Route path="/login" element={(<LoginPage />)} />
      <Route path="/forget" element={(<ForgetPage />)} />
      <Route path="/registry" element={(<RegistryPage />)} />
      <Route path="/" element={(<BasicLayout />)}>
        <Route path="/post_position" element={(<PostPositionGuider />)} />
        <Route path="/edit_fixed_position" element={(<EditFixedPosition />)} />
        <Route path="/create_fixed_position" element={(<CreateFixedPosition />)} />
        <Route path="/order_record" element={(<OrderRecord />)} />
        <Route path="/position_record" element={(<PositionRecord />)} />
        <Route path="/transaction_record" element={(<TransactionRecord />)} />
        <Route path="/user_center" element={(<UserCenter />)} />
      </Route>
    </Routes>
  )
};