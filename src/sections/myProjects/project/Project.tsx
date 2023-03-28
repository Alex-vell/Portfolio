import React, {FC} from "react";
import s from './Project.module.scss'
import {IProject} from "../../../api/userData";
import {Button} from "../../../common/components/button/Button";

type ProjectPropsType = {
    project: IProject;
    style: { backgroundImage: string }
    onClickCallback: (value: boolean, project: IProject | null) => void;
}

export const Project: FC<ProjectPropsType> = ({
                                                  project,
                                                  style,
                                                  onClickCallback
                                              }) => {
    return (
        <div className={s.project}>
            <div style={style} className={s.imgContainer}>

                <h4 className={s.titleProject}>{project.title}</h4>
                <Button
                    onClickCallback={() => {
                        onClickCallback(true, project)
                    }}
                    title="LEARN MORE"
                    className={s.btn}
                />
            </div>
        </div>
    )
}
