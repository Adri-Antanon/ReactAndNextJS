import { useContext } from "react";
import Link from "next/link";

import FavoritesContext from "../../../store/favorite-context";

import classes from "./styles.module.css";

export const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">New Meetup</Link>
          </li>
          {/* <li>
            <Link href="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
