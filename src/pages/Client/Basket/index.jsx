import { useContext, useEffect, useState } from "react"
import { basketContext } from "../../../context/BasketContext"
import { Col, Container } from "react-bootstrap"
import Table from 'react-bootstrap/Table';

export default function Basket() {
    let { basket, setBasket } = useContext(basketContext)
    let [total, setTotal] = useState("")
    function handleDecrease(item) {
        if (item.count > 1) {
            item.count--
            setBasket([...basket])
        } else {
            let filtered = basket.filter(basketDel => basketDel.id != item.id)
            setBasket(filtered)
        }
    }

    function handleIncrease(item) {
        item.count++
        setBasket([...basket])
    }

    function handleDelete(item) {
        let filtered = basket.filter(basketDel => basketDel.id != item.id)
        setBasket(filtered)
    }

    useEffect(() => {
        let total = basket.reduce((sum, total) => sum + (total.price * total.count),0)
        setTotal(total.toFixed(2))
    })

    return (
        <>
            {
                basket.length ? (
                    <Container className='my-10 container mx-auto p-4'>
                        <Table striped bordered hover>
                            <thead>
                                <tr className="font-semibold">
                                    <td>Image</td>
                                    <td>Title</td>
                                    <td>Price</td>
                                    <td>Total Price</td>
                                    <td>Decrease</td>
                                    <td>Count</td>
                                    <td>Increase</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    basket.map((item) => (
                                        <tr key={item.id}>
                                            <td><img src={item.image} alt="bookImg" width={"100px"} /></td>
                                            <td>{item.title}</td>
                                            <td>{item.price}$</td>
                                            <td>{(item.price * item.count).toFixed(2)}$</td>
                                            <td>
                                                <span onClick={() => handleDecrease(item)}>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                                                </span>
                                            </td>
                                            <td>{item.count}</td>
                                            <td>
                                                <span onClick={() => handleIncrease(item)}>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path></svg>
                                                </span>
                                            </td>
                                            <td>
                                                <span style={{ color: "darkred" }} onClick={() => handleDelete(item)}>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                        <h3>Total Price: {total}$ </h3>
                    </Container>
                ) : (
                <h1 className='m-10'>
                    Sizin basket səhifəniz boşdur.
                </h1>)
            }

        </>
    )
}