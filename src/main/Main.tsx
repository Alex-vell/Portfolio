import React from "react";
import s from './Main.module.css'

export const Main = () => {
    return <div className={s.mainBlock}>
        <div className={s.container}>
            <div className={s.photo}></div>
            <div className={s.greetings}>
                <span>Hi There</span>
                <h1>Alex Vell</h1>
                <p>Frontend Developer</p>
            </div>
        </div>
    </div>
}