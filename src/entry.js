import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "@/layouts";

import LoginPage from "@/pages/login_page";
import ForgetPage from "@/pages/forget_page";
import RegistryPage from "@/pages/registry_page";

import UserCenter from "@/pages/user_center";
import OrderRecord from "@/pages/order_record";
import TransactionRecord from "@/pages/transaction_record";

import PaymentPage from "@/pages/payment_page";
import PostPositionGuider from "@/pages/post_position_guider";
import BannerFixedPositionRecord from "@/pages/position_record/banner_fixed_position_record";
import RandomMessagePositionRecord from "@/pages/position_record/random_message_position_record";

import EditBannerFixedPosition from "@/pages/positions_type/banner_fixed_position/submodules/edit_banner_fixed_position";
import CreateBannerFixedPosition from "@/pages/positions_type/banner_fixed_position/submodules/create_banner_fixed_position";

import EditVideoPasterPosition from "@/pages/positions_type/video_paster_position/submodules/edit_video_paster_position";
import CreateVideoPasterPosition from "@/pages/positions_type/video_paster_position/submodules/create_video_paster_position";

import EditRandomMessagePosition from "@/pages/positions_type/random_message_position/submodules/edit_random_message_position";
import CreateRandomMessagePosition from "@/pages/positions_type/random_message_position/submodules/create_random_message_position";

export default () => {
  return (
    <Routes>
      <Route path="/login" element={(<LoginPage />)} />
      <Route path="/forget" element={(<ForgetPage />)} />
      <Route path="/registry" element={(<RegistryPage />)} />
      <Route path="/" element={(<BasicLayout />)}>
        <Route path="/payment_page" element={(<PaymentPage />)} />
        <Route path="/post_position_guider" element={(<PostPositionGuider />)} />
        <Route path="/position/banner_fixed_position_record" element={(<BannerFixedPositionRecord />)} />
        <Route path="/position/random_message_position_record" element={(<RandomMessagePositionRecord />)} />
        {/** 固定广告位 **/}
        <Route path="/edit_banner_fixed_position" element={(<EditBannerFixedPosition />)} />
        <Route path="/create_banner_fixed_position" element={(<CreateBannerFixedPosition />)} />
        {/** 贴片广告位 **/}
        <Route path="/edit_video_paster_position" element={(<EditVideoPasterPosition />)} />
        <Route path="/create_video_paster_position" element={(<CreateVideoPasterPosition />)} />
        {/** 随机信息流广告位 **/}
        <Route path="/edit_random_message_position" element={(<EditRandomMessagePosition />)} />
        <Route path="/create_random_message_position" element={(<CreateRandomMessagePosition />)} />

        <Route path="/order_record" element={(<OrderRecord />)} />
        <Route path="/transaction_record" element={(<TransactionRecord />)} />
        <Route path="/user_center" element={(<UserCenter />)} />
      </Route>
    </Routes>
  )
};