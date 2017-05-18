import {GET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO} from '../constants/TodoConstants';


const initialState = [];

export default function todosReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {

    case GET_TODOS:
      state = action.todos;
      return state;

    case ADD_TODO:
      return [
          {
            text: action.text,
            id: action.id,
            completed: action.completed,
            created_time: action.created_time
          },
          ...state
        ];

    case DELETE_TODO:
      var copyiedState = state.slice();
      copyiedState.forEach((todo, index) => {
        if (todo.id == action.id) {
            copyiedState.splice(index, 1);
          }
      });

      return copyiedState;

    case TOGGLE_TODO:
      return state.map((todo, index) =>{
          if (todo.id == action.id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          } else {
            return todo;
          }
        });

    case EDIT_TODO:
      return state.map((todo, index) => {
        if (todo.id == action.id) {
          return Object.assign({}, todo, {
            text: action.text
          });
        } else {
          return todo;
        }
      });

    default: 
      return state;
  }
}