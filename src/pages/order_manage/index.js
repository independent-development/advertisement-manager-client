/* eslint-disable react/prop-types */
import { PageContainer } from "@ant-design/pro-components";
import React, { useState, useEffect, useCallback } from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

import get_request from "@/utils/request/get_request";

// import css from "./style.scss";
// import css from "./style.less";

import OrderList from "./components/order_list";

export default function OrderManage(props) {

  const [data_source, set_data_source] = useState([]);

  const handleGetList = useCallback(async () => {
    const data = await get_request({ url: "/orders/list" });
    console.log(data);
    set_data_source(data);
  }, []);

  useEffect(() => { handleGetList() }, [handleGetList]);

  return (
    <PageContainer content="订单列表">
      <OrderList dataSource={data_source} onDelete={handleGetList} />
    </PageContainer>
  )
};


OrderManage.propTypes = {


};
OrderManage.defaultProps = {


};