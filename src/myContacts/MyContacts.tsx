import React from 'react';
import s from './MyContacts.module.scss'
import {Title} from "../common/components/title/Title";
import {FormComponent} from "./FormComponent";
import phoneLogo from './../assets/image/contact/phone_icon.png'
import emailLogo from './../assets/image/contact/email-icon.png'
import locationLogo from './../assets/image/contact/location_icon.png'

export const MyContacts = () => {

    const phone = {
        backgroundImage: `url(${phoneLogo})`
    }
    const email = {
        backgroundImage: `url(${emailLogo})`
    }
    const location = {
        backgroundImage: `url(${locationLogo})`
    }

    return (
        <div id={'section4'} className={s.contactsBlock}>
            <div className={s.title}>
                <Title text={'Contact'}/>
            </div>
            <div className={s.container}>

                <div className={s.iconContainer}>
                    <div className={s.contactEl}>
                        <div className={s.iconContact} style={phone}></div>
                        <span className={s.titleCont}>Phone</span>
                        <span className={s.description}>+372 29 550 49 64</span>
                    </div>
                    <div className={s.contactEl}>
                        <div className={s.iconContact} style={email}></div>
                        <span className={s.titleCont}>Email</span>
                        <span className={s.description}>sanyavelichko27@gmail.com</span>
                    </div>
                    <div className={s.contactEl}>
                        <div className={s.iconContact} style={location}></div>
                        <span className={s.titleCont}>Location</span>
                        <span className={s.description}>Minsk, Belarus</span>
                    </div>


                </div>

                <div className={s.containerForm}>
                    <FormComponent/>
                </div>
                {/*<button className={s.button}>Send</button>*/}
            </div>
        </div>
    );
};