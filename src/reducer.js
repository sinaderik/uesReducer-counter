const ACTION = {
  INCREMENT: "increase",
  DECREMENT: "decrease",
  NEW_INPUT: "newInput"
}

function reducer(state, action) {
  switch (action.type) {
    case 'increase':
      if (state.count < 5) {
        return { ...state, count: state.count + 1, error: false}
      } else {
        return { ...state, error: true, errorMessage: 'Maximum Reached' }
      }
    case 'decrease':
      if (state.count > 0) {
        return { ...state, count: state.count - 1, error: false}
      } else {
        return { ...state, error: true, errorMessage: 'Minimum Reached' }
      }
    case 'newInput':
      return { ...state, inputText: action.payload }
    default:
      text = "Looking forward to the Weekend";
  }
}

export { reducer, ACTION }