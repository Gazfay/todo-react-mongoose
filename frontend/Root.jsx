import React from 'react'
import {Router} from 'react-router';
import routes from './routes';

const Root = ({history}) => {
  return (
    <Router routes={routes} history={history} ></Router>
  )
}

export default Root;