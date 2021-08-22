import style from './Display.module.css';

type PropsType = {
    count: number
    maxValue: number
    settings: boolean
}

export const Display = (props: PropsType) => {

    const errorMessage = props.count === props.maxValue ? style.display && style.error_message : style.display
    const value = props.settings ? 'enter value' : props.count
    const classNameValue = props.settings ? style.display : errorMessage

    return (
        <div>
            <input value={value} className={classNameValue}/>
        </div>
    )
}