import React from 'react';
import s from './MyContacts.module.scss'
import {Title} from "../common/components/title/Title";
import {FormComponent} from "./FormComponent";

export const MyContacts = () => {
    return (
        <div id={'section4'} className={s.contactsBlock}>
            <div className={s.title}>
                <Title text={'Contact'}/>
            </div>
            <div className={s.container}>
                {/*<Title text={'Contact'}/>*/}
                {/*<form className={s.form}>
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.textarea}></textarea>
                </form>*/}
                <div className={s.containerForm}>
                    <FormComponent/>
                </div>
                {/*<button className={s.button}>Send</button>*/}
            </div>
        </div>
    );
};