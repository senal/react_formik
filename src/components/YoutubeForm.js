import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

import TextError from './TextError';

function YoutubeForm() {
    
    const initialValues = {
        name: '',
        email: '',
        channel: '',
        comments: '',
        address: '',
        social: {
            facebook: '',
            twitter: '',
            linkedin: ''
        },
        phoneNumbers: ['', ''],
        favourites: ['']
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
                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' id='facebook' name='social.facebook'></Field>
                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter profile</label>
                    <Field type='text' id='twitter' name='social.twitter'></Field>
                </div>            
                <div className='form-control'>
                    <label htmlFor='linkedin'>LinkedIn profile</label>
                    <Field type='text' id='linkedin' name='social.linkedin'></Field>
                </div>            
                <div className='form-control'>
                    <label htmlFor='primaryPhoneNumber'>Primary Phone Number</label>
                    <Field type='text' id='primaryPhoneNumber' name='phoneNumbers[0]'></Field>
                </div> 
                <div className='form-control'>
                    <label htmlFor='secondaryPhoneNumber'>Secondary Phone Number</label>
                    <Field type='text' id='secondaryPhoneNumber' name='phoneNumbers[1]'></Field>
                </div>      
                <div className='form-control'>
                    <label htmlFor='favourites'>Favorites</label>
                    <FieldArray name='favourites'>
                        {
                            (fieldArrayProps) => {
                                console.log('FieldArray Props', fieldArrayProps);
                                const {push, remove, form} = fieldArrayProps;
                                const { values } = form;
                                const { favourites } = values;
                                console.log('favourites', favourites);
                                return (<div>
                                    {
                                        favourites.map((f, index) => {
                                             return (<div key={index}>
                                                 <Field name={`favourites[${index}]`}></Field>
                                                 {
                                                     index > 0 && <button type='button' onClick={() => remove(index)}> - </button>
                                                 }
                                                 
                                                 <button type='button' onClick={() => push('')}> + </button>
                                             </div>);   
                                        })
                                    }
                                </div>);    
                            }
                        }    
                    </FieldArray>
                </div>      

                <div className="form-control">
                    <Field type="submit" value="submit" ></Field>
                </div>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
