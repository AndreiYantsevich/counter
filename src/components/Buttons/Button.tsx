import style from './Button.module.css';

type PropsType = {
    callback: () => void
    name: string
    count?: number
    maxValue?: number
    startValue?: number
}

export const Button = (props: PropsType) => {

    return (
        <div className={style.button_container}>
            <button className={style.button} onClick={props.callback}>{props.name}
            </button>
        </div>
    )
}