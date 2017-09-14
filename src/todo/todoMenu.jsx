import React from 'react'

import TodoProjects from './todoProjects'

export default props => {

    return (
        <div className='todomenu'>
            <ul className='first'>
                <li>Todas as tarefas</li>
                <li>Hoje</li>
                <li>Amanhã</li>
                <li>Próximos 7 dias</li>
                <li>Calendário</li>
            </ul>
            <ul>
                <li className='projetos'><span>Projetos</span><TodoProjects/></li>
                <li>Concluidos</li>
                <li>Arquivados</li>
            </ul>
        </div>
    )
}
