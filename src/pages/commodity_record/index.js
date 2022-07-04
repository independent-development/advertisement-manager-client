/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import { PageContainer } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import CommodityList from "./components/commodity_list";
import get_commodity_record_list from "./services/get_commodity_record_list";

export default function CommodityRecord(props) {
  const [data_source, set_data_source] = useState([]);

  const handleGetRecordList = useCallback(async () => {
    const record_list = await get_commodity_record_list();
    console.log(record_list);
    set_data_source(record_list);
  }, []);

  useEffect(() => { handleGetRecordList() }, [handleGetRecordList]);

  return (
    <PageContainer content="广告列表">
      <CommodityList dataSource={data_source} onDelete={handleGetRecordList} />
    </PageContainer>
  )
};


CommodityRecord.propTypes = {


};
CommodityRecord.defaultProps = {


};