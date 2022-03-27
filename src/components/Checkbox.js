import React from "react";

function Checkbox({ text, className, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
}

export default Checkbox;
