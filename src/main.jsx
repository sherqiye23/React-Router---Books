import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import BooksContext from './context/BooksContext.jsx'
import FavoritesProvider from './context/FavoritesContext.jsx'
import BasketProvider from './context/BasketContext.jsx'
createRoot(document.getElementById('root')).render(
    <BasketProvider>
        <FavoritesProvider>
            <BooksContext>
                <App />
            </BooksContext>
        </FavoritesProvider>
    </BasketProvider>

)

