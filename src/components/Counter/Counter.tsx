import React, {FC} from 'react';
import style from './Counter.module.css'
import {useDispatch} from 'react-redux';
import {resetValueAC, setIncAC} from '../../store/count-reducer';
import {Button} from '../Button/Button';

type CounterPropsType = {
    value: number | null
    minValue: number
    maxValue: number
    error: boolean
    disabled: boolean
}

export const Counter: FC<CounterPropsType> = (props) => {

    const dispatch = useDispatch()

    const setInc = () => dispatch(setIncAC())
    const resetValue = () => dispatch(resetValueAC())

    const disabledIncBtn = props.value === props.maxValue || props.disabled
    const disabledResetBtn = props.value === props.minValue || props.disabled

    return (
        <div className={style.counter}>
            <div className={style.monitor}>
                {props.error
                    ? <div className={style.error}>Incorrect value!</div>
                    : props.disabled
                        ? <div className={style.description}>Enter values and press 'Set'</div>
                        : <div
                            className={props.value === props.maxValue ? `${style.errorCount} ${style.count}` : style.count}> {props.value}</div>}
            </div>
            <div className={style.button_container}>
                <Button title={'Inc'} onClick={setInc} disabled={disabledIncBtn}/>
                <Button title={'Reset'} onClick={resetValue} disabled={disabledResetBtn}/>
            </div>
        </div>
    )
}