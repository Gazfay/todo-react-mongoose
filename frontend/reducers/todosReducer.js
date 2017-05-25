import {REQUEST_TODOS, GET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO} from '../constants/TodoConstants';


const initialState = {
  todos: [],
  loading: false
};

export default function todosReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {

    case REQUEST_TODOS:
      return Object.assign({}, state, {
        loading: action.loading
      });

    case GET_TODOS:
      return Object.assign({}, state, {
        todos: action.todos.slice()
      });

    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          {
            text: action.text,
            id: action.id,
            completed: action.completed,
            created_time: action.created_time
          },
          ...state.todos
        ]
      });

    case DELETE_TODO:
      let copyiedStateTodos = state.todos.slice();

      copyiedStateTodos.some((todo, index) => {
        if (todo.id == action.id) {
          copyiedStateTodos.splice(index, 1);
          return true;
        } else {
          return false;
        }
      });

      return Object.assign({}, state, {
        todos: copyiedStateTodos
      });


    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) =>{
          if (todo.id == action.id) {
            return Object.assign({}, todo, {
              completed: action.completed,
              updatedAt: updatedAt
            });
          } else {
            return todo;
          }
        })
      });


    case EDIT_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (todo.id == action.id) {
            return Object.assign({}, todo, {
              text: action.text,
              updatedAt: action.updatedAt
            });
          } else {
            return todo;
          }
        })
      });

    default: 
      return state;
  }
}