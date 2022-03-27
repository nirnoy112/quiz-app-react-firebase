import React from "react";
import classes from "../styles/Illustration.module.css";

function Illustration({ image, alt }) {
  return (
    <div className={classes.illustration}>
      <img src={image} alt={alt} />
    </div>
  );
}

export default Illustration;
