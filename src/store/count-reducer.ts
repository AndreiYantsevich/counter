export enum Types {
    SET_MAX_VALUE = 'SET_MAX_VALUE',
    SET_MIN_VALUE = 'SET_MIN_VALUE',
    SET_ERROR = 'SET_ERROR',
    SET_VALUE = 'SET_VALUE',
    SET_INCREMENT = 'SET_INCREMENT',
    RESET_VALUE = 'RESET_VALUE',
    DISABLED_BUTTON = 'DISABLED_BUTTON',
}

export interface SetMaxValueAction {
    type: Types.SET_MAX_VALUE;
    payload: { maxValue: number; }
}

export interface SetMinValueAction {
    type: Types.SET_MIN_VALUE;
    payload: { minValue: number; }
}

export interface SetErrorAction {
    type: Types.SET_ERROR;
    payload: { error: boolean; }
}

export interface SetValueAction {
    type: Types.SET_VALUE;
    payload: { value: number; }
}

export interface SetIncrementAction {
    type: Types.SET_INCREMENT;
}

export interface ResetValueAction {
    type: Types.RESET_VALUE;
}

export interface DisabledButtonAction {
    type: Types.DISABLED_BUTTON;
    payload: { disabled: boolean; }
}

export type CountAction =
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

export default function countReducer(state: InitialStateType = initialState, action: CountAction): InitialStateType {
    switch (action.type) {
        case Types.SET_MAX_VALUE:
            return {...state, maxValue: action.payload.maxValue}
        case Types.SET_MIN_VALUE:
            return {...state, minValue: action.payload.minValue}
        case Types.SET_ERROR:
            return {...state, error: action.payload.error}
        case Types.SET_VALUE:
            return {...state, value: action.payload.value}
        case Types.SET_INCREMENT:
            let newValue = state.value
            if (newValue != null && newValue < state.maxValue) {
                newValue += 1
            }
            return {...state, value: newValue}
        case Types.RESET_VALUE:
            const resetValue = state.minValue
            return {...state, value: resetValue}
        case Types.DISABLED_BUTTON:
            return {...state, disabled: action.payload.disabled}
        default:
            return state
    }
}

export const ActionCreators = {
    setMaxValue: (maxValue: number): SetMaxValueAction => ({type: Types.SET_MAX_VALUE, payload: {maxValue}}),
    setMinValue: (minValue: number): SetMinValueAction => ({type: Types.SET_MIN_VALUE, payload: {minValue}}),
    setError: (error: boolean): SetErrorAction => ({type: Types.SET_ERROR, payload: {error}}),
    setValue: (value: number): SetValueAction => ({type: Types.SET_VALUE, payload: {value}}),
    setIncrement: (): SetIncrementAction => ({type: Types.SET_INCREMENT}),
    resetValue: (): ResetValueAction => ({type: Types.RESET_VALUE}),
    disabledButton: (disabled: boolean): DisabledButtonAction => ({
        type: Types.DISABLED_BUTTON,
        payload: {disabled}
    })
}