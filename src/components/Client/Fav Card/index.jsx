import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router"
import { favoritesContext } from '../../../context/FavoritesContext';
import { basketContext } from '../../../context/BasketContext';

export default function FavCard({ book }) {
    let { favorites, setFavorites } = useContext(favoritesContext)
    let { basket, setBasket } = useContext(basketContext)
    let [read, setRead] = useState(false)

    const clickRead = () => {
        setRead(!read)
    }

    function handleDeleteFavorites() {
        let deletedFavs = favorites.filter(favorite => favorite.id != book.id)
        setFavorites(deletedFavs)
    }

    function handleBasket(book) {
        let findBasket = basket.find(item => item.id == book.id )
        if (findBasket) {
            findBasket.count++
            setBasket([...basket])
        } else {
            setBasket([...basket, {...book, count:1}])
        }
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
                    <Button variant="secondary" className='p-2' onClick={() => handleBasket(book)}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}