import { favoritesContext } from "../../../context/FavoritesContext"
import { useContext } from 'react';
import { Container, Col } from 'react-bootstrap';
import FavCard from "../../../components/Client/Fav Card";

export default function Favorites() {
    let { favorites } = useContext(favoritesContext)

    return (
        <>
            {
                favorites.length ? (<Container className='my-10 container mx-auto p-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            favorites.map((book) => (
                                <Col key={book.id}>
                                    <FavCard book={book} />
                                </Col>
                            ))
                        }
                    </div>
                </Container>) : (<h1 className='m-10'>
                    Sizin favorites səhifəniz boşdur.
                </h1>)
            }

        </>

    )
}