import React, {FC} from 'react';
import style from './Settings.module.css'
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import {useDispatch} from 'react-redux';
import {CountActions} from '../../store/actions';

type SettingsPropsType = {
    value: number | null
    minValue: number
    maxValue: number
    error: boolean
    disabled: boolean
}

export const Settings: FC<SettingsPropsType> = (props) => {

    const dispatch = useDispatch()

    const setMaxValue = (maxValue: number) => {
        dispatch(CountActions.setMaxValue(maxValue))
        dispatch(CountActions.disabledButton(true))
    }

    const setMinValue = (minValue: number) => {
        dispatch(CountActions.setMinValue(minValue))
        dispatch(CountActions.disabledButton(true))
    }

    const setValue = () => {
        dispatch(CountActions.setValue(props.minValue))
        dispatch(CountActions.disabledButton(false))
    }

    if (props.maxValue <= props.minValue || props.minValue < 0) {
        dispatch(CountActions.setError(true))
    } else {
        dispatch(CountActions.setError(false))
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

