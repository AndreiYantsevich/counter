import style from './Button.module.css';

type PropsType = {
    callback: () => void
    count?: number
    maxValue?: number
    startValue?: number
    settings?: boolean
    name: string
    error?: string
    disabled?: boolean
}

export const Button = (props: PropsType) => {

    const styleBtnValue = props.count === props.maxValue && props.count === props.startValue && props.settings ? style.disable : style.button

    return (
        <button
            className={styleBtnValue}
            onClick={props.callback}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    )
}