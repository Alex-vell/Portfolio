import React from 'react';
import {useFormik} from 'formik';
import * as Yup from "yup";
import s from './MyContacts.module.scss'


type FormikDataType = {
    email: string
    name: string
    message: string
}

export const FormComponent = () => {

    const initialValues = {
        email: '',
        name: '',
        message: ''
    }

    const onSubmit = (values: FormikDataType) => {

    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(1, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        message: Yup.string()
            .min(1, 'Too Short!')
            .max(100, 'Too Long!')
            .required('Required'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });


    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <span>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                    className={s.email}

                    onBlur={formik.handleBlur}
                />


                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Name"
                    className={s.name}
                    onBlur={formik.handleBlur}
                />
            </span>

            <div>
                <textarea
                    id="message"
                    name="message"
                    /*type="textarea"*/
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    placeholder="Enter message"
                    className={s.textarea}
                    onBlur={formik.handleBlur}
                />
            </div>

            <button type="submit" disabled={!(formik.dirty && formik.isValid)} className={s.button}>Submit</button>
        </form>
    );
}