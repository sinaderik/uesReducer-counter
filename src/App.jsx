import React, { useReducer } from 'react'
// import reducer from './reducer'
import { reducer, ACTION } from './reducer'
import './styles/app.css'


function App() {

  const initialState = {
    count: 0,
    inputText: '',
    errorMessage:'',
    error: false
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='container'>
      <div className='counter__wrapper'>
        <h2>Counter: {state.count}</h2>
        <div className='counter__btn-wrapper'>
          <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>Increase</button>
          <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>Decrease</button>
        </div>
        {state.error && <h2 className='error__text'>{state.errorMessage}</h2>}
      </div>
      <div className='text__wrapper'>
        <input onChange={(event) => dispatch({ type: ACTION.NEW_INPUT, payload: event.target.value })} type="text" />
        <h2>{state.inputText}</h2>
        {/* {state.error?console.log(state.error):''} */}
        
      </div>
    </div>
  )
}

export default App