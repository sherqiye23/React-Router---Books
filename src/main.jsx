import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import BooksContext from './context/booksContext.jsx'
createRoot(document.getElementById('root')).render(
    <BooksContext>
        <App />
    </BooksContext>
)

