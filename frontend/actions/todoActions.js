import uuidGenerator from './../utils/uuidGenerator';
import {VISIBLE_FILTER, REQUEST_TODOS, ADD_TODO, GET_TODOS, DELETE_TODO, TOGGLE_TODO, EDIT_TODO} from '../constants/TodoConstants';
import httpFetch from './../utils/fetch';
import clientDataHelper from './../utils/clientDataHelper';


export const getTodos = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_TODOS,
      loading: true
    });

    httpFetch('/api/todos')
    .then((response) => {
      clientDataHelper(response, () => {

        dispatch({
          type: GET_TODOS,
          todos:response.data
        });

        dispatch({
          type: REQUEST_TODOS,
          loading: false
        });

      }, () => {
        console.error(response, 'Error get todos');
      })
    })
    .catch((err) => {
      console.log(err);

      dispatch({
        type: REQUEST_TODOS,
        loading: false
      });
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
      console.log(response);
      clientDataHelper(response, () => {
        dispatch({
          type: ADD_TODO,
          id: response.data.id,
          completed: response.data.completed,
          createdAt: response.data.createdAt,
          updatedAt: response.data.updatedAt,
          text: response.data.text
        });
      }, () => {
        console.error(response.err, 'Error add todo');
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
        console.error(response, 'Error delete todo');
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export const setVisibleFilter = (filter) => {
  return {
    type: VISIBLE_FILTER,
    filter
  }
}

export const toggleTodo = (id, completed) => {
  return dispatch => {
    httpFetch(`/api/todos/${id}`, {
      method: 'PUT',
      body: {
        completed
      }
    })
    .then((response) => {
      clientDataHelper(response, () => {
        dispatch({
          type: TOGGLE_TODO,
          id: response.data.id,
          completed: response.data.completed,
          updatedAt: response.data.updatedAt
        })
      }, () => {
        console.error(response.err, 'Error add todo');
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export const editTodo = (id, text) => {
  return dispatch => {
    httpFetch(`/api/todos/${id}`, {
      method: 'PUT',
      body: {
        text
      }
    })
    .then((response) => {
      clientDataHelper(response, () => {
        dispatch({
          type: EDIT_TODO,
          id: response.data.id,
          text: response.data.text,
          updatedAt: response.data.updatedAt
        })
      }, () => {
        console.error(response.err, 'Error add todo');
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
}