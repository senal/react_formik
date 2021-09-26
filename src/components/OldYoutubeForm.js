import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function OldYoutubeForm() {
    
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

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} novalidate>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
                    {formik.errors.name && formik.touched.name ? <span className="error">{formik.errors.name}</span> : <></>}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" formnovalidate  id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
                    {formik.errors.email  && formik.touched.email ? <span className="error">{formik.errors.email}</span> : <></>}
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} ></input>
                    {formik.errors.channel && formik.touched.channel ? <span className="error">{formik.errors.channel}</span> : <></>}
                </div>
                <div className="form-control">
                    <input type="submit" value="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default OldYoutubeForm
