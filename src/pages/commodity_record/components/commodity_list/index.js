/* eslint-disable react/prop-types */
import React from "react";
import { Space, Table, Button } from "antd";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
// import css from "./style.less";

const columns = [{
  title: "广告编号",
  align: "center",
  dataIndex: "commodity_id"
}, {
  title: "订单编号",
  align: "center",
  dataIndex: "fk_transaction_id"
}, {
  title: "投放状态",
  align: "center",
  dataIndex: "status"
}, {
  title: "投放位置",
  align: "center",
  dataIndex: "pleaseholder"
}, {
  title: "创建时间",
  align: "center",
  dataIndex: "create_time"
}, {
  title: "详细操作",
  align: "center",
  render() {
    return (
      <Space>
        <Button type="default">暂停投放</Button>
        <Button danger type="default">删除广告</Button>
      </Space>
    )
  }
}];

export default function CommodityList(props) {
  const { dataSource } = props;
  return (
    <Table rowKey="id" columns={columns} dataSource={dataSource} />
  )
};


CommodityList.propTypes = {


};
CommodityList.defaultProps = {
  dataSource: []
};