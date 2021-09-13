import Image from "next/image";

import classes from "./styles.module.css";

export const MeetupDetail = ({ image, title, description, address }) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};
