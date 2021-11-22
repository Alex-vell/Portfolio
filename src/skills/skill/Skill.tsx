import React from "react";
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div style={props.style} className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    )
}
