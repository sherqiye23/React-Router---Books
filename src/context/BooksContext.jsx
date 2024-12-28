import axios from 'axios'
import React, { useEffect } from 'react'
import { createContext } from 'react'
import booksUrl from '../assets/booksUrl'
export const ContextBooks = createContext()

function BooksContext({children}) {
    
    let [books, setBooks] = React.useState([])

    useEffect(() => {
      axios.get(booksUrl).then((res) => {
        setBooks(res.data)
      })
    }, [])

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
