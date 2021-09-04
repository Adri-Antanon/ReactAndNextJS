import { Fragment } from "react";

import { MainNavigation } from "./main-navigation";

export const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};
