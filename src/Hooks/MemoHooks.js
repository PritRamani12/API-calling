import React from 'react'
import Form from '../Form'
import { useState, useMemo } from 'react'

const MemoHooks = () => {
    const [number, setNumber] = useState(0)
    const [value, setValue] = useState(50)

    const numberValue = (num) => {
        for (let index = 0; index < 1000000; index++) {
            num += 1
        }
        return num
    }

    const printNum = useMemo(() => {
        return numberValue(number)
    }, [number])
    return (
        <div>
            <Form/>
            <h1>useMemoHook</h1>
            <button onClick={() => setNumber(number + 1)}>+</button>
            <h3>{number}</h3>
            <h3>{printNum}</h3>
            <button onClick={() => setValue(value - 1)}>-</button>
            <h3>{value}</h3>
        </div>
    )
}

export default MemoHooks
