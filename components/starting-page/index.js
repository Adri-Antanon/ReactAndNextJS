import classes from "./starting-page.module.css";

export const StartingPageContent = () => {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};
