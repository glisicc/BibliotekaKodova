import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
      {/* {...props.input} spread operator, ovime osiguravamo da ce na input polju biti upisani sve props vrednost koje u njemu nisu direktno definisane*/}
    </div>
  );
});

export default Input;
