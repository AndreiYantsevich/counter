import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Buttons/Button';
import {Settings} from './components/Settings/Settings';
import {Counter} from './components/Counter/Counter';

function App() {

    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [settings, setSettings] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const changeCount = () => {
        if (count < maxValue) {
            setCount(count + 1)
        } else {
            setError('Max')
        }
    }

    const resetCount = () => {
        setCount(startValue)
        setError('')
    }

    const changeMaxValue = (value: number) => {
        if (value <= startValue || value < 0) {
            setError('Incorrect');
        } else {
            setError('');
        }
        setMaxValue(value);
    }

    const changeStartValue = (value: number) => {
        if (value >= maxValue || value < 0) {
            setError('Incorrect')
        } else {
            setError('');
        }
        setStartValue(value);
        setCount(startValue);
    }
    const onSettings = (value: boolean) => {
        setSettings(value);
    }

    return (
        <div className="App">
            <div className="container1">
                <Settings
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                    startValue={startValue}
                    maxValue={maxValue}
                    onSettings={onSettings}
                    error={error}
                />
            </div>
            <div className="container2">
                <Counter
                    count={count}
                    maxValue={maxValue}
                    settings={settings}
                />
                <Button
                    name={'increment'}
                    count={count}
                    callback={changeCount}
                    maxValue={maxValue}
                    settings={settings}
                    disabled={error === 'Max'}
                />
                <Button
                    name={'reset'}
                    count={count}
                    callback={resetCount}
                    startValue={startValue}
                    settings={settings}
                />
            </div>
        </div>
    )
}

export default App;
