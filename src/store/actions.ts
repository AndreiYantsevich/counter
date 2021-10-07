import {
    CountActionEnum,
    DisabledButtonAction,
    ResetValueAction,
    SetErrorAction,
    SetIncrementAction,
    SetMaxValueAction,
    SetMinValueAction,
    SetValueAction
} from './types';


export const CountActions = {
    setMaxValue: (maxValue: number): SetMaxValueAction => ({type: CountActionEnum.SET_MAX_VALUE, payload: {maxValue}}),
    setMinValue: (minValue: number): SetMinValueAction => ({type: CountActionEnum.SET_MIN_VALUE, payload: {minValue}}),
    setError: (error: boolean): SetErrorAction => ({type: CountActionEnum.SET_ERROR, payload: {error}}),
    setValue: (value: number): SetValueAction => ({type: CountActionEnum.SET_VALUE, payload: {value}}),
    setIncrement: (): SetIncrementAction => ({type: CountActionEnum.SET_INCREMENT}),
    resetValue: (): ResetValueAction => ({type: CountActionEnum.RESET_VALUE}),
    disabledButton: (disabled: boolean): DisabledButtonAction => ({
        type: CountActionEnum.DISABLED_BUTTON,
        payload: {disabled}
    })
}