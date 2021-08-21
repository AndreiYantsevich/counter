import style from '../Display/Display.module.css';

type PropsType = {
    count: number
    maxValue: number
}

export const Display = (props: PropsType) => {
    return (
        <div className={style.display}>
            <span className={props.count === props.maxValue ? style.error_message : ''}>{props.count}</span>
        </div>
    )
}