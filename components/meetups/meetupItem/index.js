import { useContext } from "react";

import FavoritesContext from "../../../store/favorite-context";
import { Card } from "../../ui";

import classes from "./styles.module.css";

export const MeetupItem = ({ image, title, address, description, id }) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id,
        title,
        description,
        image,
        address,
      });
    }
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
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorite" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
