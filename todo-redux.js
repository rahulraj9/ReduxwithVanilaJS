const redux = require("redux");

// Creating Action

const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// Action Creater

const addToDo = (text) => ({ text, type: ADD_TODO });
const toggleToDo = (index) => ({ index, type: TOGGLE_TODO });

/**Initial state */

const initialState = {
  todos: [],
};

// Reducer

/**Reducer is a pure function */

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      //returning the modified state
      return {
        //copy the current state
        ...state,
        todos: [
          //copy the current data in todo array
          ...state.todos,
          //modify the data
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}

/**creating store
 * For that we need to use redux library
 * Redux has a function create store
 *  create store is deprecated then why we are using it and why it is depreacted?
 *     why it is depreacted-> createStore id depreacted just beacuse react developer develop a better solution  that create store which is redux tool kit
 *     why we are using it-> As a developer we need to understand how things are going on at very raw level
 */

// createStore need a parameter reducer thats why it it important to create reducer before creating store 
const store = redux.createStore(todoReducer)


// dispatch Action
store.dispatch(addToDo("study"))
store.dispatch(addToDo("Gym"))
store.dispatch(addToDo("Game"))
store.dispatch(addToDo("office at 9"))

store.dispatch(toggleToDo(0))

// Read data from store 
console.log(store.getState())


