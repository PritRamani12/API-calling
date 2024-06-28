import React, { useState, useCallback } from 'react'
import CallBackChild from "./CallBackChild"

function CallBackExample() {
    const [number, setNumber] = useState(0)
    const [data, setData] = useState([])

    const addEntries = useCallback(() => {
        data.push("new Entry")
        setData([...data])
    }, [data])
    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>+</button>
            <h3>{number}</h3>
            <CallBackChild data={data} addEntries={addEntries} />
        </div>
    )
}

export default CallBackExample
