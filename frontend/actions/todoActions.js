import uuidGenerator from './../utils/uuidGenerator';
import {VISIBLE_FILTER, ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO} from '../constants/TodoConstants';
import httpFetch from './../utils/fetch';
import clientDataHelper from './../utils/clientDataHelper';

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
          id: response.data._id,
          completed: response.data.completed,
          startTime: response.data.created_time,
          text: response.data.text
        })
      }, () => {


      })
    })
    .catch((err) => {
      console.log(err);
    });
  }



}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
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