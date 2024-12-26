import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router"
import { Container } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { ContextBooks } from '../../../context/booksContext';
import axios from 'axios';
import booksUrl from '../../../assets/booksUrl';

export default function AdminBooks() {
    let { books, setBooks } = useContext(ContextBooks)

    function GetAdminBooks() {
        axios.get(booksUrl).then(res => {
            setBooks(res.data)
        })
    }

    useEffect(() => {
        GetAdminBooks()
    }, [])

    // delete
    async function handleDelete(id) {
        await axios.delete(booksUrl+id).then(() => {
            let filtered = books.filter(book => book.id != id)
            setBooks(filtered);
        })
    }
    return (
        <Container className='container p-4 mb-20 mt-10'>
            <Button variant="success" className='text-white my-2'>
                <NavLink
                    className="text-white no-underline"
                    to={`add-book`}>
                    Add Book
                </NavLink>
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr style={{ fontWeight: 600, fontSize: "20px" }}>
                        <td>id</td>
                        <td>image</td>
                        <td>title</td>
                        <td>price</td>
                        <td>info</td>
                        <td>delete</td>
                        <td>edit</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(({ id, image, title, price }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>
                                    <img src={image} alt="..." width={"50px"} height={"50px"} />
                                </td>
                                <td>{title}</td>
                                <td>${price}</td>
                                <td>
                                    <Button variant="info" className='text-white'>
                                        <NavLink
                                            className="text-white no-underline"
                                            to={`detail/${id}`}>
                                            Info
                                        </NavLink>
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" className='text-white' onClick={() => handleDelete(id)}>
                                        Delete
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="warning" className='text-white'>
                                        <NavLink
                                            className="text-white no-underline"
                                            to={`edit/${id}`}>
                                            Edit
                                        </NavLink>
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container >
    )
}