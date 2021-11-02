import React from "react";
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'JSs saf asf asf '}/>
                    <Skill title={'TS'} description={'asf asf asaa aaa a a'}/>
                    <Skill title={'HTML'} description={'sdf asdssssssssssss'}/>
                    <Skill title={'CSS'} description={'sdf asdssssssssssss'}/>
                    <Skill title={'React'} description={'sdf asdssssssssssss'}/>
                    <Skill title={'Redux'} description={'sdf asdssssssssssss'}/>
                    <Skill title={'React'} description={'sdf asdssssssssssss'}/>
                    <Skill title={'React'} description={'sdf asdssssssssssss'}/>
                    <Skill title={'React'} description={'sdf asdssssssssssss'}/>
                    <Skill title={'React'} description={'sdf asdssssssssssss'}/>
                    <Skill title={'React'} description={'sdf asdssssssssssss'}/>
                </div>
            </div>
        </div>
    )
}

