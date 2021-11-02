import React, {ChangeEvent} from 'react';
import style from './Input.module.css'

type PropsType = {
    value: number
    setValue: (value: number) => void
    error: boolean
}

export const Input: React.FC<PropsType> = React.memo((props) => {

    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.valueAsNumber)
    }
    const className = props.error ? style.errorInput : style.superInput

    return (
        <div>
            <input type={'number'}
                   value={props.value}
                   onChange={setValue}
                   className={className}
            />
        </div>
    )
});