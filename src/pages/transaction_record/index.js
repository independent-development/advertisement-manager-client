/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { PageContainer } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import TransactionList from "./components/transaction_list";
import get_transaction_list from "./services/get_transaction_list";

export default function TransactionRecord(props) {
  const [data_source, set_data_source] = useState([]);

  useEffect(() => {
    (async () => {
      const transaction_list = await get_transaction_list();
      set_data_source(transaction_list)
    })();
  }, []);

  return (
    <PageContainer content="交易记录">
      <TransactionList dataSource={data_source} />
    </PageContainer>
  )
};


TransactionRecord.propTypes = {


};
TransactionRecord.defaultProps = {


};