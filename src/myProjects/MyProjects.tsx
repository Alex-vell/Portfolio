import React from 'react';
import s from './MyProjects.module.css'
import {Project} from "./project/Project";

export const MyProjects = () => {


    const textDescription = 'asf as as as as fasf asfasfsdgdgsdg sdg sdg sdg sdg sdg sdg sdasf asf a'


    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'TodoList'} description={'sssss'}/>
                    <Project title={'Social Network'} description={textDescription}/>
                </div>
            </div>
        </div>
    )
}