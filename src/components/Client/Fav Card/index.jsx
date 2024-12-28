import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router"
import { favoritesContext } from '../../../context/FavoritesContext';

export default function FavCard({ book }) {
    let { favorites, setFavorites } = useContext(favoritesContext)

    let [read, setRead] = useState(false)

    const clickRead = () => {
        setRead(!read)
    }

    function handleDeleteFavorites() {
        let deletedFavs = favorites.filter(favorite => favorite.id != book.id)
        setFavorites(deletedFavs)
    }

    return (
        <Card key={book.id}>
            <div className='h-[300px]'>
                <Card.Img style={{ height: "100%" }} className='h-full object-cover' variant="top" src={book.image} />
            </div>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    {
                        read ? book.description : book.description.slice(0, 50)
                    }
                    <span
                        className='text-sky-600 cursor-pointer text-blue-600'
                        onClick={() => clickRead(book.id)}
                    >
                        {
                            read ? " ...Read Less" : " ...Read More"
                        }

                    </span>
                </Card.Text>
                <Card.Text>Qiymət: ${book.price}</Card.Text>

                <div className="buttons flex gap-2">
                    <Button variant="danger" className='p-2' onClick={() => handleDeleteFavorites()}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M373.47 25.5c-33.475-.064-67.614 13.444-94.44 43.156l37.22 145.156-33.437.032 35.343 132.093-116.718-188.375 50.03 5.375L202.5 47.312C120.437-1.43 4.756 40.396 8.5 158.156c4.402 138.44 191.196 184.6 247.406 331.625 59.376-147.035 251.26-184.33 246.656-331.624-2.564-82.042-64.6-132.532-129.093-132.656z"></path></svg>
                    </Button>
                    <Button variant="info">
                        <NavLink
                            className="text-white no-underline"
                            to={`/books/${book.id}`}>
                            Info
                        </NavLink>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}