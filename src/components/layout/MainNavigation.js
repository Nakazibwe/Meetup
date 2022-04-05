import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { useContext } from "react";
import FavoritesContext from '../../store/favorities-context';
const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className = {classes.header}>
      <div className = {classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to = "/">All Meetups</Link>
          </li>
          <li> 
            <Link to = "/newmeetup">New Meetup</Link>
          </li>
          <li>
            <Link to = "/favorities">Favorites
            <span className = {classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
