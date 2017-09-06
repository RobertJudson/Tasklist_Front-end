import React from 'react'
import IconButton from '../template/iconButton'
import TodoDate from './TodoDate'

export default props => {
    function Calendario(props) {
        var novaData = props.data;
        var dia = novaData.getDate();
        var mes = novaData.getMonth();
        var ano = novaData.getFullYear();
        return (
          <div>{dia + '/' + (mes+1) + '/' + ano}</div>
        );
        //<Calendario data={todo.date}/>
    }
    const renderRows = () => {
        const list = props.list
        console.log(list)
        return list.map(todo => (
            <tbody key={todo._id}>
                <tr className='tabela'>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.descricao}</td>
                    <td className='box'>
                        <IconButton hide={todo.done} style='success' icon='check' onClick={() => props.handleDone(todo)} />
                        <IconButton hide={!todo.done} style='success' icon='undo' onClick={() => props.handlePending(todo)} />
                    </td>

                </tr>
                <tr>
                    <td className='infos'>
                        <div className='data'><i className='fa fa-calendar'></i><Calendario data={todo.date}/></div>
                        <div className='prioridade'><i className='fa fa-exclamation-circle'></i>{todo.prioridade}</div>
                        <div className='projeto'><i className='fa fa-hashtag'></i>Sem Projeto</div>
                    </td>
                    <td className='box'><IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} /></td>
                </tr>
            </tbody>
        ))
    }

    return (
        <table>
            {renderRows()}
        </table>
    )
}

//  <IconButton style='warning' icon='rotate-left' onClick={() => props.handlePending(todo)} />
