import React from 'react';
import style from './Settings.module.css'
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import {useDispatch} from 'react-redux';
import {disabledBtnAC, setErrorAC, setMaxValueAC, setMinValueAC, setValueAC} from '../../store/count-reducer';

type SettingsPropsType = {
    value: number | null
    minValue: number
    maxValue: number
    error: boolean
    disabled: boolean
}

export const Settings = (props: SettingsPropsType) => {

    const dispatch = useDispatch()

    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
        dispatch(disabledBtnAC(true))
    }

    const setMinValue = (minValue: number) => {
        dispatch(setMinValueAC(minValue))
        dispatch(disabledBtnAC(true))
    }

    const setValue = () => {
        dispatch(setValueAC(props.minValue))
        dispatch(disabledBtnAC(false))
    }

    if (props.maxValue <= props.minValue || props.minValue < 0) {
        dispatch(setErrorAC(true))
    } else {
        dispatch(setErrorAC(false))
    }

    return (
        <div className={style.settings}>
            <div className={style.input_container}>
                <div className={style.item}>
                    <div className={style.description}>Max value:</div>
                    <div>
                        <Input value={props.maxValue} setValue={setMaxValue} error={props.error}/>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.description}>Min value:</div>
                    <div>
                        <Input value={props.minValue} setValue={setMinValue} error={props.error}/>
                    </div>
                </div>

            </div>
            <div className={style.button_container}>
                <Button title={'Set'} onClick={setValue} disabled={!props.disabled || props.error}/>
            </div>

        </div>
    )

}

