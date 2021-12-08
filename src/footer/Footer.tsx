import React from 'react';
import s from './Footer.module.scss'
import linkedinLogo from './../assets/image/footer/linkedin_img.png'
import gitHubLogo from './../assets/image/footer/gitGub_img.png'
import telegramkLogo from './../assets/image/footer/facebook_img.png'


export const Footer = () => {

    const linkedin = {
        backgroundImage: `url(${linkedinLogo})`
    }
    const gitHub = {
        backgroundImage: `url(${gitHubLogo})`
    }
    const telegram = {
        backgroundImage: `url(${telegramkLogo})`
    }


    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h3 className={s.title}>Alexander Velichko</h3>
                <div className={s.iconContainer}>
                    <a href={'https://linkedin.com/in/alex-vell'} style={linkedin} className={s.icon}></a>
                    <a href={'https://github.com/Alex-vell  '} style={gitHub} className={s.icon}></a>
                    <a href={'https://t.me/Alex_vell'} style={telegram} className={s.icon}></a>

                </div>
                <h3 className={s.copyright}>Copyright © 2021. All Rights Reserved</h3>
            </div>
        </div>
    )
}