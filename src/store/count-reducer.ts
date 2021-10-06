const initialState = {
    maxValue: 0,
    minValue: 0,
    value: null as null | number,
    error: false,
    disabled: false
}

const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_MIN_VALUE = 'SET_MIN_VALUE';
const SET_ERROR = 'SET_ERROR';
const SET_VALUE = 'SET_VALUE';
const SET_INCREMENT = 'SET_INCREMENT';
const RESET_VALUE = 'RESET_VALUE';
const DISABLED_BUTTON = 'DISABLED_BUTTON';

type ActionType =
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setMinValueAC> |
    ReturnType<typeof setErrorAC> |
    ReturnType<typeof setValueAC> |
    ReturnType<typeof setIncAC> |
    ReturnType<typeof resetValueAC> |
    ReturnType<typeof disabledBtnAC>

type InitialStateType = typeof initialState

export const countReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_MAX_VALUE:
            return {...state, maxValue: action.maxValue}
        case SET_MIN_VALUE:
            return {...state, minValue: action.minValue}
        case SET_ERROR:
            return {...state, error: action.error}
        case SET_VALUE:
            return {...state, value: action.value}
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
            return {...state, disabled: action.disabled}
        default:
            return state
    }
}

export const setMaxValueAC = (maxValue: number) => ({type: 'SET_MAX_VALUE', maxValue} as const)
export const setMinValueAC = (minValue: number) => ({type: 'SET_MIN_VALUE', minValue} as const)
export const setErrorAC = (error: boolean) => ({type: 'SET_ERROR', error} as const)
export const setValueAC = (value: number) => ({type: 'SET_VALUE', value} as const)
export const setIncAC = () => ({type: 'SET_INCREMENT'} as const)
export const resetValueAC = () => ({type: 'RESET_VALUE'} as const)
export const disabledBtnAC = (disabled: boolean) => ({type: 'DISABLED_BUTTON', disabled} as const)