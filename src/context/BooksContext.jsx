import React from 'react'
import { createContext } from 'react'
export const ContextBooks = createContext()
function BooksContext({children}) {
    
    let [books, setBooks] = React.useState([])

    const value = {
        books,
        setBooks
    }
  return (
      <ContextBooks.Provider value={value}>
        {children}
      </ContextBooks.Provider>
  )
}

export default BooksContext
