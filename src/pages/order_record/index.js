/* eslint-disable react/prop-types */
import { Tabs } from "@ant-design/pro-components";
import { PageContainer } from "@ant-design/pro-components";
import React, { useState, useEffect, useCallback } from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import OrderList from "./components/order_list";
import get_order_record_list from "./services/get_order_record_list";

export default function OrderRecord(props) {
  const [data_source, set_data_source] = useState([]);

  const handleGetRecordList = useCallback(async () => {
    const record_list = await get_order_record_list();
    console.log(record_list);
    set_data_source(record_list);
  }, []);

  useEffect(() => { handleGetRecordList() }, [handleGetRecordList]);

  return (
    <PageContainer content="订单列表">
      <OrderList dataSource={data_source} />
    </PageContainer>
  )
};


OrderRecord.propTypes = {


};
OrderRecord.defaultProps = {


};