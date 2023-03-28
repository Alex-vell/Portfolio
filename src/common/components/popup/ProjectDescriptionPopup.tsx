import React, {FC} from 'react';
import s from './ProjectDescriptionPopup.module.scss';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {IProject} from "../../../api/userData";
import {Button} from "../button/Button";
import {logo} from "../../../assets/image/logo";

type PopupPropsType = {
    project: IProject | null;
    onClickCallback: (value: boolean, project: IProject | null) => void;
}

export const ProjectDescriptionPopup: FC<PopupPropsType> = ({project, onClickCallback}) => {

    return (
        <div className={s.background} onClick={(e) => {
            e.stopPropagation();
            onClickCallback(false, null);
        }}>
            <div className={s.popup} onClick={(e) => {
                e.stopPropagation();
            }}>

                <div className={s.imgBlock}>

                    <Carousel className={s.myCarousel} showThumbs={false}>
                        {
                            project?.screens?.map((screen, index) => (
                                <div key={index}>
                                    <img className={s.myImg} src={screen}/>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>

                <div className={s.infoBlock}>
                    <p className={s.title}>{project?.title}</p>
                    <p className={s.description}>{project?.description}</p>

                    <div className={project?.link ? `${s.btnBlock} ${s.withLink}` : s.btnBlock}>
                        {project?.link && (
                            <a href={project.link} target="_blank">
                                <Button
                                    onClickCallback={() => {
                                        onClickCallback(true, project)
                                    }}
                                    title="VIEW APP"
                                    className={s.btn}
                                />
                            </a>
                        )}
                        <div className={s.imgWrap} onClick={(e) => {
                            e.stopPropagation();
                            onClickCallback(false, null);
                        }}>
                            <img src={logo.close} alt="close" className={s.img}/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
