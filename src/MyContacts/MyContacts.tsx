import React from 'react';
import s from './MyContacts.module.css'

export const MyContacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <div><h2>Contact</h2></div>
                <form className={s.formCont}>
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};