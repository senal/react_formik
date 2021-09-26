import React from 'react'
import { useFormik } from 'formik';

function YoutubeForm() {
    
    const initialValues = {
        name: 'Ranga',
        email: 'ranga@ranga.com',
        channel: "Ranga's channels"
    }

    const handleSubmit = (formData) => {
        console.log('Submit data', formData);
    }
    const handleValidation = (formData) => {
        const errors = {};
        if(!formData.name) {
            errors.name = 'Required'
        }

        if(!formData.email){
            errors.email = 'Required';
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if(!formData.channel){
            errors.channel = "Required"
        }

        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validate: handleValidation
    });

    console.log('Formik Data', formik);

    return (
        <div>
            <form onSubmit={formik.handleSubmit} novalidate>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} ></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}></input>
                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} ></input>
                <button >submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
