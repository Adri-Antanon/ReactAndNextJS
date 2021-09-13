import { useContext } from "react";
import Link from "next/link";

import FavoritesContext from "../../../store/favorite-context";

import classes from "./styles.module.css";

export const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>NextJS Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
