import { useContext } from "react";
import { useRouter } from "next/router";
import FavoritesContext from "../../../store/favorite-context";
import { Card } from "../../ui";

import classes from "./styles.module.css";

export const MeetupItem = ({ image, title, address, description, id }) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.replace(`/${id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};
