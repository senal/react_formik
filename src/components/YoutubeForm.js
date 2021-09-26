import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function YoutubeForm() {
    
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }

    const handleSubmit = (formData) => {
        console.log('Submit data', formData);
    }
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        channel: Yup.string().required('Required'),
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
                    <Field type="text" id="name" name="name" ></Field>
                    <ErrorMessage className='error' name='name'></ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="email"  id="email" name="email"></Field>
                    <ErrorMessage name='email'></ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel"></Field>
                    <ErrorMessage name='channel'></ErrorMessage>
                </div>
                <div className="form-control">
                    <Field type="submit" value="submit"></Field>
                </div>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
