import React, { useContext } from 'react'
import { data } from '../../App'

function Child4() {
    const text = useContext(data)
    return (
        <div>
            Child4
            <h1>{text}</h1>
        </div>
    )
}

export default Child4
