import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Buttons/Button';
import {Display} from './components/Display/Display';
import {Input} from './components/Input/Input';

function App() {
    let maxValue = 10
    let startValue = 0
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
            <div className="container1">
                <Input/>
                <Button callback={() => {}} name={'set'}/>
            </div>
            <div className="container2">
                <Display count={count} maxValue={maxValue}/>
                <Button
                    name={'increment'}
                    count={count}
                    callback={changeCount}
                    maxValue={maxValue}
                    startValue={startValue}
                />
                <Button
                    name={'reset'}
                    count={count}
                    callback={resetCount}
                    maxValue={maxValue}
                    startValue={startValue}
                />
            </div>
        </div>
    )
}

export default App;
