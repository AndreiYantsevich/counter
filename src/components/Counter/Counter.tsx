import React from 'react';
import style from './Counter.module.css'
import {useDispatch} from 'react-redux';
import {Button} from '../Button/Button';
import {resetValueAC, setIncrementAC} from '../../store/count-reducer';

type PropsType = {
    value: number | null
    minValue: number
    maxValue: number
    error: boolean
    disabled: boolean
}

export const Counter: React.FC<PropsType> = React.memo((props) => {

    const dispatch = useDispatch()

    const setIncrement = () => dispatch(setIncrementAC())
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
                <Button title={'Inc'} onClick={setIncrement} disabled={disabledIncBtn}/>
                <Button title={'Reset'} onClick={resetValue} disabled={disabledResetBtn}/>
            </div>
        </div>
    )
});