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

// export const Nav = () => {
// //@ts-ignore
//     document.querySelectorAll('a[href^="#"]').forEach(link => {
//
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//
//             //@ts-ignore
//             let href = this.getAttribute('href').substring(1);
//
//             const scrollTarget = document.getElementById(href);
//
//             //@ts-ignore
//             const topOffset = document.querySelector('.scrollto').offsetHeight;
//             // const topOffset = 0; // если не нужен отступ сверху
//             //@ts-ignore
//             const elementPosition = scrollTarget.getBoundingClientRect().top;
//             const offsetPosition = elementPosition - topOffset;
//
//             window.scrollBy({
//                 top: offsetPosition,
//                 behavior: 'smooth'
//             });
//         });
//     });
//
//     return (
//         <div className={s.nav}>
//             <a href='#element1'>Home</a>
//             <a href='#element2'>Skills</a>
//             <a href='#element3'>Projects</a>
//             <a href='#element4'>Contact</a>
//         </div>
//     )
// }

