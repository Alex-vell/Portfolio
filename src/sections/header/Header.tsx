import React from "react";
import s from './Header.module.scss'
import {Nav} from "./nav/Nav";

export const Header = () => {
    return <div className={s.header}>
        <div className={s.headerCont}>
            <Nav/>
        </div>
    </div>
}
