import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Buttons/Button';
import {Display} from './components/Display/Display';

function App() {
    const maxValue = 5
    const startValue = 0
    const [count, setCount] = useState(startValue)

    function changeCount() {
        if (count < maxValue)
            setCount(count + 1)
    }

    function resetCount() {
        setCount(startValue)
    }

    return (
        <div className="App">
            <div className="container">
                <Display count={count} maxValue={maxValue}/>
                <Button
                    changeCount={changeCount}
                    count={count}
                    resetCount={resetCount}
                    maxValue={maxValue}
                    startValue={startValue}
                />
            </div>
        </div>
    )
}

export default App;
