import React from 'react'

export default props => (
    <nav className='topo'>

        <div className='nav-logo'>
            <a className='logo' href="#/tarefas">
                <i className='fa fa-angle-double-right'></i> TASKLIST
            </a>
        </div>

        <div className='navegacao'>
            <ul className='menu'>
                <li><a href="#/sobre">Sobre a Tasklist</a></li>
                <li><a href="#/contato">Contato</a></li>
                <li className='usuario'><i className='fa fa-user'></i>Acesse sua conta</li>
            </ul>
        </div>

    </nav>
)
