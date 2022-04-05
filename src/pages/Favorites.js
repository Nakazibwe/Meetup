import React from 'react'
import {useContext} from 'react';
import FavoritesContext from '../store/favorities-context';
import MeetupList from '../components/meetups/MeetupList';
const FavoritesPage = () => {
 const favoritesCtx = useContext(FavoritesContext);
 let content;
 if (favoritesCtx.totalFavorites === 0) {
   content = <p>You have no favorites yet</p>;
 }else {
   content = <MeetupList meetups={favoritesCtx.favorites} />;
 }
  return (
    <div>
    <h1>My Favorites</h1>
    {content}
    </div>
  )
}

export default FavoritesPage;