import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import TextError from './TextError';

function YoutubeForm() {
    
    const initialValues = {
        name: '',
        email: '',
        channel: '',
        comments: '',
        address: ''
    }

    const handleSubmit = (formData) => {
        console.log('Submit data', formData);
    }
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        channel: Yup.string().required('Required'),
        address: Yup.string().required('Required')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            <Form >
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" placeholder="Enter name"></Field>
                    <ErrorMessage className='error' name='name' component={TextError} ></ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="email"  id="email" name="email" placeholder="Enter your email"></Field>
                    <ErrorMessage name='email'>
                        {
                            (errorMessage) => <div className='error'>{errorMessage}</div>
                        }
                    </ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel" placeholder="Channel name"></Field>
                    <ErrorMessage name='channel' component={TextError}></ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field as='textarea' id="comments" name="comments" placeholder="Comments"></Field>
                    <ErrorMessage name='channel'>
                        {
                            (errorMessage) => <div className='error'>{errorMessage}</div>
                        }
                    </ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <Field name="address">
                        {
                         props => {
                            const {form, field, meta} = props;

                                return (
                                    <div>
                                        <input type='text' {...field} id="address" />
                                        {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                    <ErrorMessage name='channel'></ErrorMessage>
                </div>

                <div className="form-control">
                    <Field type="submit" value="submit" ></Field>
                </div>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
