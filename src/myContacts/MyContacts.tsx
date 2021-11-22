import React from 'react';
import s from './MyContacts.module.scss'
import {Title} from "../common/components/title/Title";

export const MyContacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <Title text={'Contact'}/>
                <form className={s.form}>
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.textarea}></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};