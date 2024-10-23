import React, { useEffect, createContext, useReducer } from 'react';
import { favReducer } from './Reducer/facreducer';

export const FavouriteContext = createContext();

const initFavorites = () => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  };

export const FavouriteProvider = ({children})=>{
    const [state , dispatch] = useReducer(favReducer , [] , initFavorites)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state));
      }, [state]);

    const addFav = (recipe)=>{
        dispatch({type:'ADD',payload:recipe})
    }

    const removeFav = (recipe)=>{
        dispatch({type:'REMOVE',payload:recipe})
    }

    const clearFav = (recipe)=>{
        dispatch({type:'CLEAR'});
    }

    return(
        <FavouriteContext.Provider value={{favourites:state, addFav , removeFav , clearFav}}>
            {children}
        </FavouriteContext.Provider>
    )

}