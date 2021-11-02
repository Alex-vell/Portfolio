import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h2 className={s.name}>Alex Vell</h2>
                <div className={s.iconContainer}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <h3 className={s.copyright}>Copyright © 2021. All Rights Reserved</h3>
            </div>
        </div>
    )
}