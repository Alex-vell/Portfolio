import React from 'react';
import s from './MyProjects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todolistImg from './../assets/image/todolist.jpg'
import socialImg from './../assets/image/socialNetwork.jpg'

export const MyProjects = () => {

    const textDescription = 'asf as as as as fasf asfasfsdgdgsdg sdgsdf sdf sd f sdf sdg sdg sdg sdg sdg sdasf asf a'

    const todoList = {
        backgroundImage: `url(${todolistImg})`
    }
    const socialNetwork = {
        backgroundImage: `url(${socialImg})`
    }


    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Todo list'} description={'sssss'} style={todoList} />
                    <Project title={'Social Network'} description={textDescription} style={socialNetwork}/>
                    {/*<Project title={'Counter'} description={'sjfkfgf gdf dfg '}/>*/}
                </div>
            </div>
        </div>
    )
}