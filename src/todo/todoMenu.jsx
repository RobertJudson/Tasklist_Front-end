import React from 'react'

export default props => {

    const renderProjetos = () => {
        const list = props.list
        console.log(list)
        return list.map(projetos => (
            <ul key={projetos._id}>
                <li>{projetos.titleProj}</li>
            </ul>
        ))
    }

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
                <li className='projetos'><span>Projetos</span>{renderProjetos()}</li>
                <li>Concluidos</li>
                <li>Arquivados</li>
            </ul>
        </div>
    )

}
