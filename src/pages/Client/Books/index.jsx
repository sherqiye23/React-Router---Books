import { Container, Row, Col } from 'react-bootstrap';
import BookCard from '../../../components/Client/Book Card';
import booksUrl from '../../../assets/booksUrl';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Books() {
    let [books, setBooks] = useState([]);

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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    books.map((book) => (
                        <Col>
                            <BookCard book={book} />
                        </Col>
                        
                    ))
                }
            
            </div>
        </Container>
    );
}