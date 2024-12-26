import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

    return (
        <>
            <h1 className='text-center my-3 '>Edit Form</h1>

            <Formik
                initialValues={{
                    title: '',
                    description: "",
                    price: null,
                    author: "",
                    pagesCount: null,
                    publishedYear: "",
                    genre: "",
                    language: "",
                    image: ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Form data:', values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="my-form flex flex-col max-w-screen-lg mx-auto mb-20">
                        <div className="input-group">
                            <Field
                                placeholder='...edit title'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="title"
                                name="title"
                                type="text" />
                            <ErrorMessage name="title" component="div" />
                        </div>
                        <div className="input-group">
                            <Field
                                placeholder='...edit description'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="description"
                                name="description"
                                type="text" />
                            <ErrorMessage name="description" component="div" />
                        </div>
                        <div className="input-group">
                            <Field
                                placeholder='...edit price'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="price"
                                name="price"
                                type="number" />
                            <ErrorMessage name="price" component="div" />
                        </div>
                        <div className="input-group">
                            <Field
                                placeholder='...edit author'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="author"
                                name="author"
                                type="text" />
                            <ErrorMessage name="author" component="div" />
                        </div>
                        <div className="input-group">
                            <Field
                                placeholder='...edit pages count'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="pagesCount"
                                name="pagesCount"
                                type="number" />
                            <ErrorMessage name="pagesCount" component="div" />
                        </div>
                        <div className="input-group">
                            <Field
                                placeholder='...edit published year'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="publishedYear"
                                name="publishedYear"
                                type="text" />
                            <ErrorMessage name="publishedYear" component="div" />
                        </div>

                        <div className="input-group">
                            <Field
                                placeholder='...edit genre'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="genre"
                                name="genre"
                                type="text" />
                            <ErrorMessage name="genre" component="div" />
                        </div>
                        <div className="input-group">
                            <Field
                                placeholder='...edit language'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="language"
                                name="language"
                                type="text" />
                            <ErrorMessage name="language" component="div" />
                        </div>
                        <div className="input-group">
                            <Field
                                placeholder='...edit image'
                                className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                id="image"
                                name="image"
                                type="text" />
                            <ErrorMessage name="image" component="div" />
                        </div>

                        <button type="submit" className='bg-orange-500 max-w-40 p-2 text-white rounded-3' disabled={isSubmitting}>Edit Book</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
