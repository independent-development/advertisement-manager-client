/* eslint-disable react/prop-types */
import React from "react";
import { PageContainer } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

import OrderList from "./components/OrderList";

export default function OrderManage(props) {
  return (
    <PageContainer content="订单列表">
      <OrderList />
    </PageContainer>
  )
};


OrderManage.propTypes = {


};
OrderManage.defaultProps = {


};