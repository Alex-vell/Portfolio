import React from "react";
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a className={s.linkCont}>Open</a>
            </div>
            <h4 className={s.titleProject}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}
