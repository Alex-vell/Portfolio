import React from 'react';
import s from './Footer.module.scss'
import linkedinLogo from './../assets/image/footer/linkedin_img.png'
import gitHubLogo from './../assets/image/footer/gitGub_img.png'
import emailLogo from './../assets/image/footer/email_img.png'
import facebookLogo from './../assets/image/footer/facebook_img.png'


export const Footer = () => {

    const linkedin = {
        backgroundImage: `url(${linkedinLogo})`
    }
    const gitHub = {
        backgroundImage: `url(${gitHubLogo})`
    }
    const email = {
        backgroundImage: `url(${emailLogo})`
    }
    const facebook = {
        backgroundImage: `url(${facebookLogo})`
    }

    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h3 className={s.title}>Alexander Velichko</h3>
                <div className={s.iconContainer}>
                    <div style={linkedin} className={s.icon}></div>
                    <div style={gitHub} className={s.icon}></div>
                    <div style={email} className={s.icon}></div>
                    <div style={facebook} className={s.icon}></div>
                </div>
                <h3 className={s.copyright}>Copyright © 2021. All Rights Reserved</h3>
            </div>
        </div>
    )
}