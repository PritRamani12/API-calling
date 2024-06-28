import React, { memo } from 'react'

function CallBackChild({ data, addEntries }) {
    console.log("child-callback");
    return (
        <div>
            <button onClick={() => addEntries()}>Add</button>
            {
                data.map((item) => (
                    <h1>{item}</h1>
                ))
            }
        </div>
    )
}

export default memo(CallBackChild)
