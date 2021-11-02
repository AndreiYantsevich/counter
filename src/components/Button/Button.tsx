import React from 'react';
import style from './Button.module.css'

type PropsType = {
    title: string,
    onClick?: () => void
    disabled?: boolean
}

export const Button: React.FC<PropsType> = React.memo((props) => {

    return (
        <div className={style.item}>
            <button onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
        </div>
    )
});