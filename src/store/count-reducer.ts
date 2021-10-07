import {CountAction, CountActionEnum} from './types';

const initialState = {
    maxValue: 0,
    minValue: 0,
    value: null as null | number,
    error: false,
    disabled: false
}

type InitialStateType = typeof initialState

export const countReducer = (state: InitialStateType = initialState, action: CountAction): InitialStateType => {
    switch (action.type) {
        case CountActionEnum.SET_MAX_VALUE:
            return {...state, maxValue: action.payload.maxValue}
        case CountActionEnum.SET_MIN_VALUE:
            return {...state, minValue: action.payload.minValue}
        case CountActionEnum.SET_ERROR:
            return {...state, error: action.payload.error}
        case CountActionEnum.SET_VALUE:
            return {...state, value: action.payload.value}
        case CountActionEnum.SET_INCREMENT:
            let newValue = state.value
            if (newValue != null && newValue < state.maxValue) {
                newValue += 1
            }
            return {...state, value: newValue}
        case CountActionEnum.RESET_VALUE:
            const resetValue = state.minValue
            return {...state, value: resetValue}
        case CountActionEnum.DISABLED_BUTTON:
            return {...state, disabled: action.payload.disabled}
        default:
            return state
    }
}