import React from "react";
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
    linkToProject: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div style={props.style} className={s.imgContainer}>

                <h4 className={s.titleProject}>{props.title}</h4>
                {/*<span className={s.description}>{props.description}</span>*/}
                <a className={s.linkCont} href={props.linkToProject}>Open</a>


            </div>
            {/*<h4 className={s.titleProject}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>*/}
        </div>
    )
}
