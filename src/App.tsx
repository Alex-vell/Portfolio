import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myProjects/MyProjects";
import {MyContacts} from "./MyContacts/MyContacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
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
