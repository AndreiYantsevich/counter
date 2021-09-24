import React from 'react';
import style from './App.module.css';
import {useSelector} from 'react-redux';
import {Settings} from './components/Settings/Settings';
import {Counter} from './components/Counter/Counter';
import {AppRootStateType} from './store/store';


const App = () => {

    const value = useSelector((state: AppRootStateType) => state.count.value)
    const minValue = useSelector((state: AppRootStateType) => state.count.minValue)
    const maxValue = useSelector((state: AppRootStateType) => state.count.maxValue)
    const error = useSelector((state: AppRootStateType) => state.count.error)
    const disabled = useSelector((state: AppRootStateType) => state.count.disabled)

    return (
        <div className={style.app}>
            <Settings value={value}
                      minValue={minValue}
                      maxValue={maxValue}
                      error={error}
                      disabled={disabled}
            />
            <Counter value={value}
                     minValue={minValue}
                     maxValue={maxValue}
                     error={error}
                     disabled={disabled}
            />
        </div>
    )
}

export default App;
