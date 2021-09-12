import classes from "./styles.module.css";
import { MainNavigation } from "..";

export const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};
