import React, { useRef, useState } from 'react'

function RefExample() {
    const [name, setName] = useState("refexample")
    const [number, setNumber] = useState(0)
    const inputRef = useRef("")
    const numberRef = useRef(0)

    const handleReset = () => {
        setName("")
        console.log(inputRef);
        inputRef.current.focus()
        inputRef.current.style.color = "red"
    }

    const handleClick = () => {
        setNumber(number + 1)
        console.log(number);
        numberRef.current++
        console.log(numberRef);
    }
    return (
        <div>
            <input ref={inputRef} type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <button onClick={() => handleReset()}>Reset</button><br />
            <h1>{number}</h1>
            <h1>{numberRef.current}</h1>
            <button onClick={() => handleClick()}>Increment</button>
        </div>
    )
}

export default RefExample
