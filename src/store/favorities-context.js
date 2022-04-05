import {createContext, useState} from 'react';
const FavoritesContext = createContext({
    favorites: [],
    totalFavorities:0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);
    
    const addFavoritiesHandler = (favoritemeetup) => {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.concat(favoritemeetup);
        });
    }

    const removeFavoritiesHandler = (meetupId) => {
       setUserFavorites(prevUserFavorites => {
              return prevUserFavorites.filter(favoritemeetup => favoritemeetup.id !== meetupId)
         });
    }
    

    const ItemIsFavoriteHandler = (meetupId) => {
       return userFavorites.some(favoritemeetup => favoritemeetup.id === meetupId); 
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritiesHandler,
        removeFavorite: removeFavoritiesHandler,
        itemIsFavorite: ItemIsFavoriteHandler
    };

    return(
    <FavoritesContext.Provider value={context}>
            {props.children}
    </FavoritesContext.Provider>
    );



} 
export default FavoritesContext;
