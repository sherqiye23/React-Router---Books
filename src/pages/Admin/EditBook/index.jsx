import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import booksUrl from '../../../assets/booksUrl';
import { Alert, Button } from 'react-bootstrap';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Required').max(50, 'Must be 50 characters or less').min(3, 'Must be 3 characters or more'),

    description: Yup.string().required('Required').max(50, 'Must be 50 characters or less').min(20, 'Must be 20 characters or more'),

    price: Yup.number().required().positive().integer().max(100, 'Must be 100 characters or less').min(3, 'Must be 3 characters or more'),

    author: Yup.string().required('Required').max(15, 'Must be 15 characters or less').min(3, 'Must be 3 characters or more'),

    publishedYear: Yup.string().required('Required'),

    genre: Yup.string().required('Required').max(20, 'Must be 20 characters or less').min(3, 'Must be 3 characters or more'),

    language: Yup.string().required('Required').max(20, 'Must be 20 characters or less').min(3, 'Must be 3 characters or more'),

    image: Yup.string().required('Required').url(),

    pagesCount: Yup.number().required().positive().integer().max(100, 'Must be 100 characters or less').min(3, 'Must be 3 characters or more')
});

export default function EditBook() {
    let [edit, setEdit] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()
    const [feedback, setFeedback] = useState('');

    function GetBook() {
        axios.get(booksUrl + id).then((res) => {
            setEdit(res.data)
        }).catch((err) => {
            console.error('Error fetching book data:', err);
        });
    }

    useEffect(() => {
        GetBook()
    }, [id])

    let [etitle, setEtitle] = useState(edit.title)


    return (
        <>
            <h1 className='text-center my-3 '>Edit Form</h1>
            {feedback && <Alert variant="info" className="text-center">{feedback}</Alert>}
            <Formik
                enableReinitialize
                initialValues={{
                    title: edit.title || "",
                    description: edit.description || "",
                    price: edit.price || "",
                    author: edit.author || "",
                    pagesCount: edit.pagesCount || "",
                    publishedYear: edit.publishedYear || "",
                    genre: edit.genre || "",
                    language: edit.language || "",
                    image: edit.image || ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    axios.patch(booksUrl + id, values).then(() => {
                        setFeedback('Book updated successfully!');
                    }).catch((err) => {
                        console.error('Error updating book:', err);
                        setFeedback('Failed to update book. Please try again.');
                    });
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col max-w-screen-lg mx-auto mb-20">
                        {['title', 'description', 'price', 'author', 'pagesCount', 'publishedYear', 'genre', 'language', 'image'].map((field) => (
                            <div className="input-group" key={field}>
                                <Field
                                    placeholder={`Edit ${field}`}
                                    className="border-2 border-black px-2 py-1 my-1 w-full"
                                    id={field}
                                    name={field}
                                    type={field === 'price' || field === 'pagesCount' ? 'number' : 'text'}
                                />
                                <ErrorMessage name={field} component="div" className="text-red-500 text-sm" />
                            </div>
                        ))}
                        <button type="submit" className='bg-orange-500 max-w-40 p-2 text-white rounded-3' disabled={isSubmitting}>Edit Book</button>
                    </Form>
                )}
            </Formik>
            <Button variant="secondary" className='mx-20' onClick={() => navigate("/admin/adminbooks")}> Back to Books Table</Button>
        </>
    )
}
