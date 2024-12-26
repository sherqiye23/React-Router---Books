import { Container, Col } from 'react-bootstrap';
import BookCard from '../../../components/Client/Book Card';
import booksUrl from '../../../assets/booksUrl';
import React, { useEffect } from 'react';
import axios from 'axios';
import { ContextBooks } from '../../../context/booksContext';

export default function Books() {
    let { books, setBooks } = React.useContext(ContextBooks)

    const getBooks = () => {
        axios.get(booksUrl).then(res => {
            setBooks(res.data)
        })
    }

    useEffect(() => {
        getBooks()
    }, [])


    return (
        <Container className='my-10 container mx-auto p-4'>
            <div className="search">
                <label htmlFor="search">Search: </label>
                <input 
                    className='border-1 border-solid border-stone-700 px-2 py-1 mb-5'
                    type="text" 
                    id='search'/>
                <button type="button" class="mx-2 px-3 py-1 bg-orange-500 text-white rounded-3">Sort by Name</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    books.map((book) => (
                        <Col key={book.id}>
                            <BookCard book={book} />
                        </Col>
                        
                    ))
                }
            </div>
        </Container>
    );
}