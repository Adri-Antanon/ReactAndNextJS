import classes from "./styles.module.css";

export const Card = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
