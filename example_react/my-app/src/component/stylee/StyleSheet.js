import React from "react";
import "./MyCss.css";
function StyleSheet(props) {
  const myCss = props.primary ? "primary" : "";
  return <h1 className={myCss}>CSS USING STYLE SHEET</h1>;
}

export default StyleSheet;
