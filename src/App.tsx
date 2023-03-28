import React from 'react';
import s from './App.module.scss';
import {Header} from "./sections/header/Header";
import {Main} from "./sections/main/Main";
import {Skills} from "./sections/skills/Skills";
import {MyProjects} from "./sections/myProjects/MyProjects";
import {MyContacts} from "./sections/myContacts/MyContacts";
import {Footer} from "./sections/footer/Footer";

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
