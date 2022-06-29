/* eslint-disable react/prop-types */
import React from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
import css from "./style.less";

import RegistryForm from "./forms/registry_form";

export default function RegistryPage(props) {
  return (
    <div className={css.registry_form}>
      <div className={css.page_container}>
        <RegistryForm />
      </div>
    </div>
  )
};


RegistryPage.propTypes = {


};
RegistryPage.defaultProps = {


};