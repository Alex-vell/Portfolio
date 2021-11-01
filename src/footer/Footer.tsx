import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <div><h2>Alex Vell</h2></div>
                <div className={s.containerIcon}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <div className={s.copyright}><h3>Copyright © 2021. All Rights Reserved</h3></div>
            </div>
        </div>
    )
}