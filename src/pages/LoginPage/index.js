/* eslint-disable react/prop-types */
import React from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
import css from "./style.less";

import TronLink from "./components/TronLink";

export default function LoginPage(props) {
  return (
    <div className={css.login_page_container}>
      <div className={css.login_page}>
        <TronLink />
      </div>
    </div>
  )
};


LoginPage.propTypes = {


};
LoginPage.defaultProps = {


};