import {Input} from './Input/Input';
import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './Settings.module.css'
import {Button} from '../Buttons/Button';

type PropsType = {
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    onSettings: (value: boolean) => void
    error: string
}

export const Settings = (props: PropsType) => {

    const [localMaxValue, setLocalMaxValue] = useState<number>(props.maxValue)
    const [localStartValue, setLocalStartValue] = useState<number>(props.startValue)

    const startValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(parseInt(event.currentTarget.value))
        props.onSettings(true)
    }

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(parseInt(event.currentTarget.value))
        props.onSettings(true)
    }

    const addLocalStorageValues = (startValue: number, maxValue: number) => {
        setLocalStartValue(startValue)
        setLocalMaxValue(maxValue)
    }

    useEffect(() => {
        setStorageValues()
    }, [localStartValue])

    const setStorageValues = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(localMaxValue))
        localStorage.setItem('counterStartValue', JSON.stringify(localStartValue))
    }

    const onClickSetBtnHandler = () => {
        props.changeStartValue(props.startValue)
        addLocalStorageValues(props.startValue, props.maxValue)
        props.onSettings(false)
    }

    let inputClass = props.error ? style.error : style.set_input

    return (
        <div>
            <div>
                <Input
                    name={'maxValue'}
                    type={'number'}
                    className={inputClass}
                    value={props.maxValue}
                    callback={maxValueHandler}
                />
                <Input
                    name={'startValue'}
                    type={'number'}
                    className={inputClass}
                    value={props.startValue}
                    callback={startValueHandler}
                />
            </div>
            <div>
                <Button
                    callback={onClickSetBtnHandler}
                    name={'set'}
                    disabled={props.error === 'Incorrect'}
                />
            </div>
        </div>
    )
}