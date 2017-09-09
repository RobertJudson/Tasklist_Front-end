import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'  // Todo é a página "Tarefas"
import Teste from '../teste/teste'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Todo}/>
        <Route path='/teste' component={Teste}/>
        <Redirect from='*' to='/tarefas' />
    </Router>
)