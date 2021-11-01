const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_MIN_VALUE = 'SET_MIN_VALUE';
const SET_ERROR = 'SET_ERROR';
const SET_VALUE = 'SET_VALUE';
const SET_INCREMENT = 'SET_INCREMENT';
const RESET_VALUE = 'RESET_VALUE';
const DISABLED_BUTTON = 'DISABLED_BUTTON';

type SetMaxValueAction = {
    type: 'SET_MAX_VALUE';
    payload: { maxValue: number; }
}

type SetMinValueAction = {
    type: 'SET_MIN_VALUE';
    payload: { minValue: number; }
}

type SetErrorAction = {
    type: 'SET_ERROR';
    payload: { error: boolean; }
}

type SetValueAction = {
    type: 'SET_VALUE';
    payload: { value: number; }
}

type SetIncrementAction = {
    type: 'SET_INCREMENT';
}

type ResetValueAction = {
    type: 'RESET_VALUE';
}

type DisabledButtonAction = {
    type: 'DISABLED_BUTTON';
    payload: { disabled: boolean; }
}

type ActionType =
    SetMaxValueAction |
    SetMinValueAction |
    SetErrorAction |
    SetValueAction |
    SetIncrementAction |
    ResetValueAction |
    DisabledButtonAction

const initialState = {
    maxValue: 0,
    minValue: 0,
    value: null as null | number,
    error: false,
    disabled: false
}

type InitialStateType = typeof initialState

export default function countReducer(state: InitialStateType = initialState, action: ActionType): InitialStateType {
    switch (action.type) {
        case SET_MAX_VALUE:
            return {...state, maxValue: action.payload.maxValue}
        case SET_MIN_VALUE:
            return {...state, minValue: action.payload.minValue}
        case SET_ERROR:
            return {...state, error: action.payload.error}
        case SET_VALUE:
            return {...state, value: action.payload.value}
        case SET_INCREMENT:
            let newValue = state.value
            if (newValue != null && newValue < state.maxValue) {
                newValue += 1
            }
            return {...state, value: newValue}
        case RESET_VALUE:
            const resetValue = state.minValue
            return {...state, value: resetValue}
        case DISABLED_BUTTON:
            return {...state, disabled: action.payload.disabled}
        default:
            return state
    }
}


export const setMaxValueAC = (maxValue: number): SetMaxValueAction => ({type: SET_MAX_VALUE, payload: {maxValue}})
export const setMinValueAC = (minValue: number): SetMinValueAction => ({type: SET_MIN_VALUE, payload: {minValue}})
export const setErrorAC = (error: boolean): SetErrorAction => ({type: SET_ERROR, payload: {error}})
export const setValueAC = (value: number): SetValueAction => ({type: SET_VALUE, payload: {value}})
export const setIncrementAC = (): SetIncrementAction => ({type: SET_INCREMENT})
export const resetValueAC = (): ResetValueAction => ({type: RESET_VALUE})
export const disabledButtonAC = (disabled: boolean): DisabledButtonAction => ({
    type: DISABLED_BUTTON,
    payload: {disabled}
})
