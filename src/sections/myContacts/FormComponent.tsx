import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from "yup";
import s from './MyContacts.module.scss'
import {api} from "../../api/api";
import {Button} from "../../common/components/button/Button";
import {AxiosError} from "axios";

export type FormikDataType = {
    email: string
    name: string
    message: string
}


export const FormComponent = () => {

    const [isActiveName, setIsActiveName] = useState<boolean>(false);
    const [isActiveEmail, setIsActiveEmail] = useState<boolean>(false);
    const [isActiveMessage, setIsActiveMessage] = useState<boolean>(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
    const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const initialValues = {
        email: '',
        name: '',
        message: ''
    }

    const onSubmit = async (value: FormikDataType) => {
        try {
            await api.sendMessage(value);
            setIsSuccessMessage(true);
        } catch (error) {
            const err = error as AxiosError
            setIsSuccessMessage(false);
            setIsErrorMessage(true);
            setErrorMessage(err.message);
        }
        formik.resetForm();
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(1, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        message: Yup.string()
            .min(1, 'Too Short!')
            .max(200, 'Too Long!')
            .required('Required'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setIsSuccessMessage(false);
        }, 3000)
        return () => {
            clearInterval(intervalId);
        }
    }, [isSuccessMessage])

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setIsErrorMessage(false);
            setErrorMessage('');
        }, 3000)
        return () => {
            clearInterval(intervalId);
        }
    }, [isErrorMessage])

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div className={s.inputBlock}>
                <div className={s.inputWrap}>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Email"
                        className={s.email}
                        onFocus={() => {
                            setIsActiveEmail(true)
                        }}
                        onBlur={() => {
                            setIsActiveEmail(false)
                        }}
                    />
                    <label
                        className={isActiveEmail ? `${s.label} ${s.activeLabel}` : s.label}
                        htmlFor="email"
                    />
                </div>


                <div className={s.inputWrap}>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Name"
                        className={s.name}
                        onFocus={() => {
                            setIsActiveName(true)
                        }}
                        onBlur={() => {
                            setIsActiveName(false)
                        }}
                    />
                    <label
                        className={isActiveName ? `${s.label} ${s.activeLabel}` : s.label}
                        htmlFor="name"
                    />
                </div>
            </div>

            <div>
                <textarea
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    placeholder="Enter message"
                    className={s.textarea}
                    onFocus={() => {
                        setIsActiveMessage(true)
                    }}
                    onBlur={() => {
                        setIsActiveMessage(false)
                    }}
                />
                <label
                    className={isActiveMessage ? `${s.labelTextarea} ${s.activeLabelTextarea}` : s.labelTextarea}
                    htmlFor="message"
                />
            </div>

            <div>
                <Button
                    onClickCallback={() => {
                    }}
                    title="Send message"
                    className={s.button}
                    disabled={!(formik.dirty && formik.isValid)}
                    type="submit"
                />
            </div>

            <div className={s.respBlock}>
                {
                    isSuccessMessage && (
                        <p className={s.successMessage}>Message successfully sent...</p>
                    )
                }

                {
                    isErrorMessage && (
                        <p className={s.errorMessage}>{errorMessage}</p>
                    )
                }
            </div>

        </form>
    );
}
