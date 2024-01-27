const redux = require('redux')

// Creating Action

const ADD_TODO="Add TODO"
const TOGGLE_TODO="Toggle TODO"


// Action Creater

const addToDo = (text)=>({text,type:ADD_TODO})
const toggleToDo = (index)=>({index,type:TOGGLE_TODO})

/**Initial state */

const initialState={
  todos:[]
}

// Reducer

/**Reducer is a pure function */

function todoReducer(state=initialState,action){
  switch (action.type) {
    case ADD_TODO :
      //returning the modified state
      return{
        //copy the current state
        ...state,
        todos:[
          //copy the current data in todo array
          ...state.todos,
          //modify the data
          {
            text:action.text,
            completed:false
          }
        ]
      }
    case TOGGLE_TODO:
      return{
        ...state,
        todos:todos.map((todo,index)=>{
          if(index===action.index){
            todo.completed=!todo.completed
          }
          return todo
        })
      }
  
    default:
      return state
  }
}