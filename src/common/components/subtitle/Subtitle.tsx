import React from 'react';
import s from './Subtitle.module.scss'

type TitlePropsType = {
    text: string
}

export const Subtitle = (props: TitlePropsType) => {

    return (
        <div className={s.title}>
            <h3>{props.text}</h3>
        </div>
    )
}
