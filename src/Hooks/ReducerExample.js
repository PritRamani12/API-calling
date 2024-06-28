import React, { useReducer } from 'react'

const reducerFunction = (state, action) => {
    console.log(state);
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
}
function ReducerExample() {
    const [state, dispatch] = useReducer(reducerFunction, 0)
    return (
        <div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </div>
    )
}

export default ReducerExample
