import React from "react";
import s from './Main.module.scss'
import {ParticlesComponent} from "../../common/components/canvas/Particles";
import {Link} from "react-scroll";

export const Main = () => {

    return (
        <div id={'section1'} className={s.mainBlock}>
            <div className={s.bkgBlock}/>
            <div className={s.container}>
                <div className={s.greetings}>
                    <span>Hello, I am</span>
                    <h1>Alexander Velichko</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.btnBlock}>
                    <Link to='section4'
                          spy={true}
                          className={s.section}
                          activeClass={s.active}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        Contact
                    </Link>
                    <Link to='section3'
                          spy={true}
                          className={s.section}
                          activeClass={s.active}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        Projects
                    </Link>
                </div>
            </div>


            <div className={s.particle}>
                <ParticlesComponent/>
            </div>
        </div>

    )
}
