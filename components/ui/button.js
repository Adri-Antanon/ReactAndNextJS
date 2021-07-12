import Link from "next/link";
import React from "react";

import classes from "./button.module.css";

function Button({ link, children }) {
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
}

export default Button;
