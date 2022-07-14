/* eslint-disable react/prop-types */
import classname from "classnames";
import React, { useMemo, useState, useEffect, useCallback } from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
import css from "./style.less";

export default function ViewPosition(props) {

  const { row, col, image_src, style, className, ...otherProps } = props;

  const [computed_height, set_computed_height] = useState(0);
  const [container_ref, set_container_ref] = useState(null);

  const handle_computed_height = useCallback(() => {
    if (container_ref) {
      return set_computed_height((container_ref.offsetWidth / row) * col);
    }
    return set_computed_height(0);
  }, [container_ref]);

  useEffect(() => {
    handle_computed_height();
    window.removeEventListener("load", handle_computed_height);
    window.addEventListener("load", handle_computed_height);
    window.removeEventListener("resize", handle_computed_height);
    window.addEventListener("resize", handle_computed_height);
    return () => {
      window.removeEventListener("load", handle_computed_height);
      window.addEventListener("resize", handle_computed_height);
    }
  }, [handle_computed_height]);

  const computed_style = useMemo(() => {
    return Object.assign({}, {
      height: computed_height,
      backgroundColor: "#888888",
      backgroundImage: `url(${image_src})`
    }, style);
  }, [image_src, style, computed_height]);

  return (
    <div ref={set_container_ref} style={computed_style} className={classname(css.ad_w12_h5_container, className)} {...otherProps} />
  )
};


ViewPosition.propTypes = {


};
ViewPosition.defaultProps = {
  row: 25,
  col: 3
};