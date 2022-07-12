/* eslint-disable react/prop-types */
import { Form } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { useMemo, useEffect, useCallback } from "react";
import { ProCard } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import form_config from "./configs/form_config";

import ResourceLinkType from "./form_items/resource_link_type";
import CalculateValue from "./form_items/calculate_value";
import ResourceLink from "./form_items/resource_link";
import CommodityTitle from "./form_items/commodity_title";
import CommodityDiscription from "./form_items/commodity_discription";
import CommodityLinkURL from "./form_items/commodity_link_url";

export default function EditPositionForm(props) {
  const { form, initialValues, onValuesChange, ...otherProps } = props;

  useEffect(() => {
    if (initialValues) {
      onValuesChange(initialValues.calculate_value);
    }
  }, [initialValues, onValuesChange]);

  const formatInitialValues = useMemo(() => {
    if (initialValues) {
      const clone_initial_values = { ...initialValues };
      return clone_initial_values;
    }
    return null;
  }, [initialValues]);

  const handleValuesChange = useCallback(async (changeValues, allValues) => {
    const { calculate_value } = allValues;
    await onValuesChange(calculate_value);
  }, [onValuesChange]);

  if (!formatInitialValues) {
    return (
      <LoadingOutlined style={{ position: "fixed", top: "50%", left: "50%", fontSize: 48 }} />
    );
  };

  return (
    <Form {...form_config} initialValues={formatInitialValues} form={form} onValuesChange={handleValuesChange}>
      <ProCard ghost direction="column" gutter={[16, 16]}>
        <ProCard title="基础费用配置">
          <CalculateValue />
        </ProCard>
        <ProCard title="详细配置">
          <ResourceLinkType />
          <ResourceLink />
          <CommodityTitle />
          <CommodityDiscription />
          <CommodityLinkURL />
        </ProCard>
      </ProCard>
    </Form>
  )
};


EditPositionForm.propTypes = {

};

EditPositionForm.defaultProps = {
  initialValues: null,
  onValuesChange() { }
};