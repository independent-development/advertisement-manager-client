/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import { PageContainer } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import OrderList from "./components/position_list";
import get_position_list from "./services/get_position_list";

export default function PositionRecord(props) {
  const [data_source, set_data_source] = useState([]);

  const handleGetRecordList = useCallback(async () => {
    const position_list = await get_position_list();
    console.log(position_list);
    set_data_source(position_list);
  }, []);

  useEffect(() => { handleGetRecordList() }, [handleGetRecordList]);

  return (
    <PageContainer content="广告位">
      <OrderList dataSource={data_source} />
    </PageContainer>
  )
};


PositionRecord.propTypes = {


};
PositionRecord.defaultProps = {


};