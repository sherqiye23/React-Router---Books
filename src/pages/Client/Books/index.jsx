import React, { useState, useEffect } from "react";
import BookCard from "../../../components/Client/Book Card/index";
import { ContextBooks } from "../../../context/BooksContext";
import { Col, Container } from "react-bootstrap";

export default function Books() {
    const { books: initialBooks } = React.useContext(ContextBooks);
    const [allBooks, setAllBooks] = useState([])
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        setAllBooks(initialBooks);
        setBooks(initialBooks);
    }, [initialBooks]); 
    function handleSearch(e) {
        const searchValue = e.target.value.trim().toLowerCase();

        if (searchValue === "") {
            setBooks(allBooks);
        } else {
            const searchBooks = allBooks.filter(book =>
                book.title.toLowerCase().startsWith(searchValue)
            );
            setBooks(searchBooks);
        }
    }

    function handleSort() {
        let sortedBooks = books.toSorted((a, b) => a.title.localeCompare(b.title))
        if (JSON.stringify(books) != JSON.stringify(sortedBooks) ) {
            setBooks(sortedBooks)
        } else {
            setBooks(initialBooks)
        }
    }

    return (
        <Container className="my-10 container mx-auto p-4">
            <div className="search">
                <label htmlFor="search">Search: </label>
                <input
                    onChange={handleSearch}
                    className="border-1 border-solid border-stone-700 px-2 py-1 mb-5"
                    type="text"
                    id="search"
                />
                <button
                    onClick={() => handleSort()}
                    type="button"
                    className="mx-2 px-3 py-1 bg-orange-500 text-white rounded-3"
                >
                    Sort by Name
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                    <Col key={book.id}>
                        <BookCard book={book} />
                    </Col>
                ))}
            </div>
        </Container>
    );
}
