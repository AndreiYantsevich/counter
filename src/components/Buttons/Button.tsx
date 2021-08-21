import style from '../Buttons/Button.module.css';

type PropsType = {
    changeCount: () => void
    count: number
    resetCount: () => void
    maxValue: number
    startValue: number
}

export const Button = (props: PropsType) => {
    return (
        <div className={style.button_container}>
            <button className={style.button} onClick={props.changeCount} disabled={props.count === props.maxValue}>Increment
            </button>
            <button className={style.button} onClick={props.resetCount}
                    disabled={props.count === props.startValue}>Reset
            </button>
        </div>
    )
}