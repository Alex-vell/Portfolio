import React from "react";
import s from './Skills.module.scss'
import {Title} from "../../common/components/title/Title";
import {user_data} from "../../api/userData";
import {Subtitle} from "../../common/components/subtitle/Subtitle";


export const Skills = () => {
    return (
        <div id={'section2'} className={s.skillsBlock}>
            <Title text={'About me'}/>

            <div className={s.skillsContainer}>

                <div className={s.about}>
                    <Subtitle text="Get to know me!"/>

                    <div className={s.photoContainer}>

                    </div>
                    <div className={s.textContainer}>
                        {
                            user_data.aboutMe.split("\n").map(function (item, idx) {
                                return (
                                    <p key={idx}>
                                        {item}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={s.skillsWrap}>

                    <Subtitle text="My Skills"/>

                    <div className={s.skills}>
                        {
                            user_data.skills.map(skill => (
                                <div key={skill.id} className={s.skill}>
                                    <img className={s.skillImg} src={skill.logo ? skill.logo : ''}
                                         alt={skill.title}/>
                                    <span>{skill.title}</span>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}


