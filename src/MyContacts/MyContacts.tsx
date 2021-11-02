import React from 'react';
import s from './MyContacts.module.css'

export const MyContacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2 className={s.titleBlock}>Contact</h2>
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