/* eslint-disable react/prop-types */
import moment from "moment";
import { useNavigate } from "react-router-dom";
import React, { useMemo, useCallback } from "react";
import { Space, Table, Button, Tooltip } from "antd";

// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export default function OrderList(props) {
  const { dataSource, onDelete } = props;

  const navigate = useNavigate();

  const columns = useMemo(() => ([{
    title: "编号",
    align: "center",
    dataIndex: "position_id",
    render(value) {
      return (
        <Tooltip title={value} style={{ whiteSpace: "nowrap" }}>
          <span>{`${value.substring(0, 8)}...`}</span>
        </Tooltip>
      );
    }
  }, {
    title: "投放状态",
    align: "center",
    render({ active_status }) {
      return active_status;
    }
  }, {
    title: "创建时间",
    align: "center",
    dataIndex: "create_time",
    render(value) {
      return moment(value).format("YYYY年MM月DD日 HH时mm分ss秒")
    }
  }, {
    title: "详细操作",
    align: "center",
    render({ position_id, relation_transaction }) {
      if (!relation_transaction) {
        return (
          <Space>
            <Button type="primary" onClick={() => navigate(`/edit_random_message_position?position_id=${position_id}`)}>编辑</Button>
            <Button type="default">详情</Button>
            <Button danger type="primary">下架</Button>
          </Space>
        )
      }
      return false;
    }
  }]), [navigate]);

  return (
    <Table rowKey="position_id" columns={columns} dataSource={dataSource} />
  )
};


OrderList.propTypes = {


};
OrderList.defaultProps = {
  dataSource: [],
  onDelete() { }
};