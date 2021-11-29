import React from 'react';
import s from './MyProjects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todolistImg from './../assets/image/todolist.jpg'
import socialImg from './../assets/image/socialNetwork.jpg'

export const MyProjects = () => {

    const textDescription = 'asf as as as as fasf asfasfsdgdgsdg sdgsdf sdf sd f sdf sdg sdg sdg sdg sdg sdasf asf a'

    const linkToTodolist = 'https://alex-vell.github.io/TodoList_inc/'
    const linkToSocNetwork = 'https://alex-vell.github.io/Social_Network_TS/'

    const todoList = {
        backgroundImage: `url(${todolistImg})`
    }
    const socialNetwork = {
        backgroundImage: `url(${socialImg})`
    }


    return (
        <div id={'section3'} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Todo list'}
                             description={'sssss'}
                             style={todoList}
                             linkToProject={linkToTodolist}/>
                    <Project title={'Social Network'}
                             description={textDescription}
                             style={socialNetwork}
                             linkToProject={linkToSocNetwork}/>
                    {/*<Project title={'Counter'} description={'sjfkfgf gdf dfg '}/>*/}
                </div>
            </div>
        </div>
    )
}