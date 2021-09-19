import {combineReducers, createStore} from 'redux';
import {countReducer} from './count-reducer';
import {loadState, saveState} from '../utils/localstorage';

const rootReducer = combineReducers({
    count: countReducer,
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        count: store.getState().count
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>