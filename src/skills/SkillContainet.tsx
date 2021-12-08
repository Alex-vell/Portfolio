import React from "react";
import s from './SkillContainer.module.scss'

type SkillContainerPropsType = {
    title: string
    style: { backgroundImage: string }
}

export const SkillContainer = (props: SkillContainerPropsType) => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.iconContainer}>
                <div style={props.style} className={s.icon}></div>
            </div>
            {props.title}
        </div>
    )
}
