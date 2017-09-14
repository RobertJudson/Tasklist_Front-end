import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'  // Todo é a página "Tarefas"
import Home from '../home/home'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Todo}/>
        <Route path='/home' component={Home}/>
        <Redirect from='*' to='/home' />
    </Router>
)