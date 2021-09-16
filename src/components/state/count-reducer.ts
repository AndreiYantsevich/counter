const initialState = {
    maxValue: 0,
    minValue: 0,
    value: null as null | number,
    error: false,
    disabled: false
}

type ActionType = ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setValueAC>
    | ReturnType<typeof setIncAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof disabledBtnAC>

type InitialStateType = typeof initialState

export const countReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.minValue}
        case 'SET-ERROR':
            return {...state, error: action.error}
        case 'SET-VALUE':
            return {...state, value: action.value}
        case 'SET-INCREMENT':
            let newValue = state.value
            if (newValue != null && newValue < state.maxValue) {
                newValue += 1
            }
            return {...state, value: newValue}
        case 'RESET-VALUE':
            const resetValue = state.minValue
            return {...state, value: resetValue}
        case 'DISABLED-BUTTON':
            return {...state, disabled: action.disabled}
        default:
            return state
    }
}

export const setMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
export const setMinValueAC = (minValue: number) => ({type: 'SET-MIN-VALUE', minValue} as const)
export const setErrorAC = (error: boolean) => ({type: 'SET-ERROR', error} as const)
export const setValueAC = (value: number) => ({type: 'SET-VALUE', value} as const)
export const setIncAC = () => ({type: 'SET-INCREMENT'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const disabledBtnAC = (disabled: boolean) => ({type: 'DISABLED-BUTTON', disabled} as const)