import React from 'react';
import s from './MyContacts.module.scss'
import {Title} from "../../common/components/title/Title";
import {FormComponent} from "./FormComponent";

export const MyContacts = () => {

    return (
        <div id={'section4'} className={s.contactsBlock}>
            <div className={s.title}>
                <Title text={'Contact'}/>
            </div>

            <div className={s.title}>
                <h3 className={s.text}>Get in touch or shoot me an email directly on
                    sanyavelichko27@gmail.com
                </h3>
            </div>

            <div className={s.container}>

                <div className={s.containerForm}>
                    <FormComponent/>
                </div>

            </div>

        </div>
    );
};
