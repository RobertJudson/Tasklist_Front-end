import React from 'react'
import TodoProject from './todoProject'

export default props => (
    <div className='todomenu'>
        <ul className='first'>
            <li>Todas as tarefas</li>
            <li>Hoje</li>
            <li>Amanhã</li>
            <li>Próximos 7 dias</li>
            <li>Calendário</li>
        </ul>
        <ul>
            <li className='projetos'><span>Projetos</span><TodoProject /></li>
            <li>Concluidos</li>
            <li>Arquivados</li>
        </ul>
    </div>
)
