import uuidGenerator from './../utils/uuidGenerator';
import {VISIBLE_FILTER, ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO} from '../constants/TodoConstants';
import httpFetch from './../utils/fetch';

export const addTodo = (text) => {

  console.log(httpFetch('/api/todos', {
    method: 'POST', 
    body: {
          completed: false,
          text
        }
  }));

  // httpFetch(url)
  // .then((result)=> {
  //   console.log(result);
  // });

  return dispatch => {
    // httpFetch('/api/todos', {method: 'POST'}).then((result) => {
    //   console.log(result);
    //   dispatch({
    //       type: ADD_TODO,
    //       id: uuidGenerator(),
    //       completed: false,
    //       startTime: new Date(),
    //       text
    //     })
    // })
    // .catch((err) => {
    //   console.log('err');
    // });
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