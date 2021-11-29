import React from 'react';
import s from './App.module.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myProjects/MyProjects";
import {MyContacts} from "./myContacts/MyContacts";
import {Footer} from "./footer/Footer";
import {Link} from "react-scroll";

function App() {

    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <MyContacts/>
            <Footer/>
        </div>
    );
}

export default App;
