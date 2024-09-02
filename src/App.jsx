import React, { useReducer } from 'react'
import reducer from './reducer'
import './styles/app.css'


function App() {

  const initialState = {
    count: 0,
    error: false
  }

  const ACTION = {
    INCREMENT: "increase",
    DECREMENT: "decrease",
  }


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='container'>
      <div className='counter__wrapper'>
        <h2>Counter: {state.count}</h2>
        <div className='counter__btn-wrapper'>
          <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
          <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
        </div>
      </div>
      <div className='text__wrapper'>
        <input type="text" />
        <h2></h2>
      </div>
    </div>
  )
}

export default App