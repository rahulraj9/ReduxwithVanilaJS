const redux = require('redux')

// Creating Action

const ADD_TODO="Add TODO"
const TOGGLE_TODO="Toggle TODO"


// Action Creater

const addToDo = (text)=>({text,type:ADD_TODO})
const toggleToDo = (index)=>({index,type:TOGGLE_TODO})

/**Initial state */

const initialState={
  todo:[]
}

// Reducer

/**Reducer is a pure function */

function todoReducer(state=initialState,action){
  switch (action.type) {
    case ADD_TODO :
    case TOGGLE_TODO:
  
    default:
      return state
  }
}