import "./Button.scss";
import PropTypes from "prop-types";
import React from "react";

const Button = (props) => {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

Button.protoTypes = {
  onClick: PropTypes.func,
};
export default Button;
