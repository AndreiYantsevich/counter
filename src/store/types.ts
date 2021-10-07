export enum CountActionEnum {
    SET_MAX_VALUE = 'SET_MAX_VALUE',
    SET_MIN_VALUE = 'SET_MIN_VALUE',
    SET_ERROR = 'SET_ERROR',
    SET_VALUE = 'SET_VALUE',
    SET_INCREMENT = 'SET_INCREMENT',
    RESET_VALUE = 'RESET_VALUE',
    DISABLED_BUTTON = 'DISABLED_BUTTON',
}

export interface SetMaxValueAction {
    type: CountActionEnum.SET_MAX_VALUE;
    payload: {maxValue: number;}
}

export interface SetMinValueAction {
    type: CountActionEnum.SET_MIN_VALUE;
    payload: {minValue: number;}
}

export interface SetErrorAction {
    type: CountActionEnum.SET_ERROR;
    payload: {error: boolean;}
}

export interface SetValueAction {
    type: CountActionEnum.SET_VALUE;
    payload: {value: number;}
}

export interface SetIncrementAction {
    type: CountActionEnum.SET_INCREMENT;
}

export interface ResetValueAction {
    type: CountActionEnum.RESET_VALUE;
}

export interface DisabledButtonAction {
    type: CountActionEnum.DISABLED_BUTTON;
    payload: {disabled: boolean;}
}

export type CountAction =
    SetMaxValueAction |
    SetMinValueAction |
    SetErrorAction |
    SetValueAction |
    SetIncrementAction |
    ResetValueAction |
    DisabledButtonAction


