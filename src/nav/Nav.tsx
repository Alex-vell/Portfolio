import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {


    return (
        <div className={s.nav}>
            <a>
                <Link to='section1'
                      spy={true}
                      activeClass="active"
                      smooth={true}
                      offset={-70}
                      duration={500}>Home</Link>
            </a>
            <a>
                <Link to='section2'
                      spy={true}
                      activeClass="active"
                      smooth={true}
                      offset={-70}
                      duration={500}>Skills</Link>
            </a>
            <a>
                <Link to='section3'
                      spy={true}
                      activeClass="active"
                      smooth={true}
                      offset={-70}
                      duration={500}>Projects</Link>
            </a>
            <a>
                <Link to='section4'
                      spy={true}
                      activeClass="active"
                      smooth={true}
                      offset={-70}
                      duration={500}>Contact</Link>
            </a>
        </div>
    )
}

