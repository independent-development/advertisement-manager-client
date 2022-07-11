/* eslint-disable react/prop-types */
import { Form } from "antd";
import { getProperty } from "dot-prop";
import React, { useMemo, useCallback } from "react";
import { ProCard } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import form_config from "./configs/form_config";

import CalculateValue from "./form_items/calculate_value";
import LinkType from "./form_items/link_type";
import ResourceLink from "./form_items/resource_link";
import CommodityTitle from "./form_items/commodity_title";
import CommodityDiscription from "./form_items/commodity_discription";
import CommodityLinkURL from "./form_items/commodity_link_url";

export default function CreateCommodityForm(props) {
  const { form, initialValues, ...otherProps } = props;

  const computed_initial_values = useMemo(() => {
    const clone_initial_values = { ...initialValues };
    clone_initial_values.content_type = "IMAGE";
    clone_initial_values.resource_type = "OSS_URL";
    return clone_initial_values;
  }, [initialValues]);

  const handleValuesChange = useCallback((changeValues, allValues) => {
    // console.log("allValues", allValues);
  }, []);

  return (
    <Form {...form_config} initialValues={computed_initial_values} form={form} onValuesChange={handleValuesChange}>
      <ProCard ghost direction="column" gutter={[16, 16]}>
        <ProCard title="基础费用配置">
          <CalculateValue />
        </ProCard>
        <ProCard title="详细配置">
          <LinkType />
          <ResourceLink />
          <CommodityTitle />
          <CommodityDiscription />
          <CommodityLinkURL />
        </ProCard>
      </ProCard>
    </Form>
  )
};


CreateCommodityForm.propTypes = {

};

CreateCommodityForm.defaultProps = {
  initialValues: getProperty(window, "dev_inject.random_message_position_initial_values", {})
};