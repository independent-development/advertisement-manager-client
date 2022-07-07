/* eslint-disable react/prop-types */
import { Form } from "antd";
import React, { useCallback } from "react";
import { ProCard } from "@ant-design/pro-components";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

import form_config from "./configs/form_config";

import CalculateType from "./form_items/calculate_type";
import CalculateValue from "./form_items/calculate_value";
import Placeholder from "./form_items/pleaceholder";
import SubjectDetail from "./form_items/subject_detail";
import ContentType from "./form_items/content_type";
import ResourceType from "./form_items/resource_type";
import ResourceLink from "./form_items/resource_link";
import CommodityTitle from "./form_items/commodity_title";
import CommodityDiscription from "./form_items/commodity_discription";
import CommodityLinkURL from "./form_items/commodity_link_url";

export default function CreateCommodityForm(props) {
  const { form, initialValues, ...otherProps } = props;

  const handleValuesChange = useCallback((changeValues, allValues) => {
    // console.log("allValues", allValues);
  }, []);

  return (
    <Form {...form_config} initialValues={initialValues} form={form} onValuesChange={handleValuesChange}>
      <ProCard ghost direction="column" gutter={[16, 16]}>
        <ProCard title="基础费用配置">
          <CalculateType />
          <CalculateValue />
          <SubjectDetail />
          <Placeholder />
        </ProCard>
        <ProCard title="详细配置">
          <ContentType />
          <ResourceType />
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
  initialValues: {
    subject_detail_page: ["homepage"],
    calculate_type: "DAY",
    calculate_value: 1,
    pleaceholder: "PAGE_TOP",
    content_type: "IMAGE",
    resource_type: "OSS_URL",
    resource_link: "https://ewr1.vultrobjects.com/test-bucket-002/4ba4e20401b8bdc4845ea6ecfa02e8ba.jpeg"
  }
};