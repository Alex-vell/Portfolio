import React, {useState} from 'react';
import s from './MyProjects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";
import {ProjectDescriptionPopup} from "../../common/components/popup/ProjectDescriptionPopup";
import {IProject, user_data} from "../../api/userData";

export const MyProjects = () => {

    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [currentProject, setCurrentProject] = useState<IProject | null>(null);

    const onClickCallback = (value: boolean, project: IProject | null) => {
        setIsOpenPopup(value);
        setCurrentProject(project);
    }

    return (
        <div id={'section3'} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    {
                        user_data.projects.map((project) => (
                            <Project
                                key={project.id}
                                project={project}
                                style={{
                                    backgroundImage: `url(${project.logo})`
                                }}
                                onClickCallback={onClickCallback}
                            />
                        ))
                    }
                </div>
            </div>

            {
                isOpenPopup && (
                    <ProjectDescriptionPopup
                        project={currentProject}
                        onClickCallback={onClickCallback}
                    />
                )
            }
        </div>
    )
}
