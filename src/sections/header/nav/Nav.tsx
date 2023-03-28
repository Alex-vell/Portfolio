import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {


    return (
        <div className={s.nav}>
            <Link to='section1'
                  spy={true}
                  className={s.section}
                  activeClass={s.active}
                  smooth={true}
                  offset={-70}
                  duration={500}>Home</Link>
            <Link to='section2'
                  spy={true}
                  className={s.section}
                  activeClass={s.active}
                  smooth={true}
                  offset={-70}
                  duration={500}>Skills</Link>
            <Link to='section3'
                  spy={true}
                  className={s.section}
                  activeClass={s.active}
                  smooth={true}
                  offset={-70}
                  duration={500}>Projects</Link>
            <Link to='section4'
                  spy={true}
                  className={s.section}
                  activeClass={s.active}
                  smooth={true}
                  offset={-70}
                  duration={500}>Contact</Link>
        </div>
    )
}

