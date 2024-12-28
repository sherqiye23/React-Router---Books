import { createContext, useEffect, useState } from "react";
export const favoritesContext = createContext()

export default function FavoritesProvider({children} ) {
    let localFavs = JSON.parse(localStorage.getItem("favorites"))
    let [favorites, setFavorites] = useState( localFavs ? localFavs : [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    let value = {
        favorites,
        setFavorites
    }

    return <favoritesContext.Provider value={value}> {children} </favoritesContext.Provider>
}