import React, { useReducer ,useDebugValue} from 'react';
const initialState={count:0}
function Reducer(props) {
    let [state,dispatch]=useReducer(reduce,initialState)
    useDebugValue(state)
    return (
        <div>
            <h1>useReducer Hooks</h1>
            <span>{state.count}</span>
            <button onClick={()=>{dispatch('increment')}}>+</button>
            <button onClick={()=>{dispatch('decrement')}}>-</button>
        </div>
    );
}
function reduce(state,action){
switch (action){
    case 'increment':
        return {count:state.count+1}
    case 'decrement':
        return {count:state.count-1}
    default:
        throw Error('Mismatched cases')
}
}

export default Reducer;