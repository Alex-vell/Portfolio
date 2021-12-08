import React from "react";
import s from './Main.module.scss'
import myPhotoPortfolio from './../assets/image/myPhoto_Portfolio.jpg'

export const Main = () => {

    return (
        <div id={'section1'} className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.photoContainer}>
                    <img className={s.photo} src={myPhotoPortfolio} alt={'my photo'}/>
                </div>
                <div className={s.greetings}>
                    <span>Hello, I am</span>
                    <h1>Alexander Velichko</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </div>
    )
}