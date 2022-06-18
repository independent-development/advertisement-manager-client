/* eslint-disable react/prop-types */
import React from "react";
import { PageContainer } from "@ant-design/pro-components";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";
import CommodityList from "./components/CommodityList";


export default function CommodityRecord(props) {
  return (
    <PageContainer content="广告列表">
      <CommodityList />
    </PageContainer>
  )
};


CommodityRecord.propTypes = {


};
CommodityRecord.defaultProps = {


};