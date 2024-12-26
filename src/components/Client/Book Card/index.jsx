import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router"

export default function BookCard({ book }) {

    let [read, setRead] = useState(false)

    const clickRead = () => {
        setRead(!read)
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
                        onClick={() => clickRead()}
                    >
                        {
                            read ? " ...Read Less" : " ...Read More"
                        }

                    </span>
                </Card.Text>
                <Card.Text>Qiymət: ${book.price}</Card.Text>

                <div className="buttons flex gap-2">
                    <Button variant="info">
                        <NavLink
                            className="text-white no-underline"
                            to={`${book.id}`}>
                            Info
                        </NavLink>

                    </Button>
                    <Button variant="danger" className='p-2'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
                    </Button>
                    <Button variant="secondary" className='p-2'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}