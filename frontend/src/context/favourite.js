import React, { useEffect, createContext, useReducer } from 'react';
import { favReducer } from './Reducer/facreducer';

export const FavouriteContext = createContext();

export const FavouriteProvider = ({children})=>{

    const [state , dispatch] = useReducer(favReducer , [])

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
        <FavouriteContext.Provider value={{favourties:state, addFav , removeFav , clearFav}}>
            {children}
        </FavouriteContext.Provider>
    )

}