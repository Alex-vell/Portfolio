import React from "react";
import s from './Main.module.scss'
import myPhotoPortfolio from './../assets/image/myPhoto_Portfolio.jpg'

export const Main = () => {

    const myPhoto = {
        backgroundImage: `url(${myPhotoPortfolio})`
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div style={myPhoto} className={s.photo}></div>
                <div className={s.greetings}>
                    <span>Hi There</span>
                    <h1>Alexander Velichko</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </div>
    )
}