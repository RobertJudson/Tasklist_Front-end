import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'  // Todo é a página "Tarefas"
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Todo}/>
        <Route path='/about' component={About}/>
    </Router>
)
