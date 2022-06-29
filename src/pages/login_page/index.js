/* eslint-disable react/prop-types */
import React from "react";
// import classnames from "classnames";
// import propTypes from "prop-types";

// import css from "./style.scss";
import css from "./style.less";

import UserLoginForm from "./forms/login_form";
// import TronLink from "./components/tron_link";

export default function LoginPage(props) {
  return (
    <div className={css.login_page_container}>
      <div className={css.login_page}>
        <UserLoginForm />
      </div>
    </div>
  )
};


LoginPage.propTypes = {


};
LoginPage.defaultProps = {


};