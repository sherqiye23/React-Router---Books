import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import booksUrl from "../../../assets/booksUrl";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

export default function AdminBookDetail() {
    let [detail, setDetail] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()

    function GetBook() {
        axios.get(booksUrl + id).then((res) => {
            setDetail(res.data)
        })
    }

    useEffect(() => {
        GetBook()
    }, [id])
    return (
        <>
            <Container className='my-10 mb-20 container mx-auto p-4'>
                <Card className="flex flex-row items-center">
                    <div
                        className="h-[600px] w-1/3">
                        <Card.Img variant="top" src={detail.image} className="h-full w-full object-cover" />
                    </div>
                    <Card.Body className="w-4/6">
                        <Card.Title style={{ fontSize: "30px" }}>{detail.title}</Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                            Genre: {detail.genre}, <br />
                            Author: {detail.author}, <br /> 
                            Published Year: {detail.publishedYear}, <br /> Language: {detail.language}, <br /> 
                            Pages Count: {detail.pagesCount}
                        </Card.Text>
                        <Card.Text style={{ fontSize: "20px" }}>
                            {detail.description}
                        </Card.Text>
                        <Card.Text style={{ fontSize: "25px" }}>
                            Price: {detail.price}$
                        </Card.Text>
                        <Button variant="secondary" onClick={() => navigate("/admin/adminbooks")}> Back to Books Table</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}