import React, { useReducer } from 'react'

function App() {

  const initialState = {
    count: 0,
    error: false
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'increase':
        return { ...state, count: state.count + 1 }
      case 'decrease':
        return { ...state, count: state.count - 1 }
      default:
        text = "Looking forward to the Weekend";
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h3>Counter: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'increase' })}>Increase</button><br /><br />
      <button onClick={()=>dispatch({ type: 'decrease' })}>Decrease</button>
    </div>
  )
}

export default App