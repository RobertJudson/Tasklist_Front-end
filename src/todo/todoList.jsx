import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    function Calendario(props) {
        var novaData = props.data;
        var dia = novaData.getDate() + 1;
        var mes = novaData.getMonth() + 1;
        var ano = novaData.getFullYear();
        if(dia == 32 && mes == 12 && ano == 1969){
            dia = "- -";
            mes = "- -";
            ano = "- - - -";
        }
        return (
          <span>{dia + ' / ' + mes + ' / ' + ano}</span>
        );
    }
    
    const renderRows = () => {
        const list = props.list
        //console.log(list)
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
                        <div className='data'><i className='fa fa-calendar'></i>{<Calendario data={new Date(todo.date)}/>}</div>
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
