import React from 'react'

/*
export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href="#">
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/tarefas">Tarefas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)
*/
export default props => (
    <nav className='topo'>

        <div className='nav-logo'>
            <a className='logo' href="#/tarefas">
                <i className='fa fa-angle-double-right'></i> TASKLIST
            </a>
        </div>

        <div className='navegacao'>
            <ul className='menu'>
                <li><a href="#/tarefas"><i className='fa fa-home'></i></a></li>
                <li><a href="#/teste"><i className='fa fa-cog'></i></a></li>
                <li className='usuario'><a href="#/teste"><i className='fa fa-user'></i>Usuario</a></li>
            </ul>
        </div>

    </nav>
)
