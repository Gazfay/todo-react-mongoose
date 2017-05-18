import uuidGenerator from './../utils/uuidGenerator';
import {VISIBLE_FILTER, ADD_TODO, GET_TODOS, DELETE_TODO, TOGGLE_TODO, EDIT_TODO} from '../constants/TodoConstants';
import httpFetch from './../utils/fetch';
import clientDataHelper from './../utils/clientDataHelper';


export const getTodos = () => {
  return dispatch => {
    httpFetch('/api/todos')
    .then((response) => {
      clientDataHelper(response, () => {
        dispatch({
          type: GET_TODOS,
          todos:response.data
        })
      }, () => {
        console.erro('Error get todos');
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export const addTodo = (text) => {
  return dispatch => {
    httpFetch('/api/todos', {
      method: 'POST', 
      body: {
        completed: false,
        text
      }
    })
    .then((response) => {
      clientDataHelper(response, () => {
        dispatch({
          type: ADD_TODO,
          id: response.data.id,
          completed: response.data.completed,
          created_time: response.data.created_time,
          text: response.data.text
        })
      }, () => {
        console.erro('Error add todo');
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

}

export const deleteTodo = (id) => {
  return dispatch => {
    httpFetch(`/api/todos/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      clientDataHelper(response, () => {
        dispatch({
          type: DELETE_TODO,
          id
        })
      }, () => {
        console.erro('Error delete todo');
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // return {
  //   type: DELETE_TODO,
  //   id
  // }
}

export const setVisibleFilter = (filter) => {
  return {
    type: VISIBLE_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    id,
    text
  }
}