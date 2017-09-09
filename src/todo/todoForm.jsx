import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

var date = new Date();

export default props => (
    <form onSubmit={props.handleAdd}>
        <input className='descricao' placeholder='Adicione uma tarefa' value={props.descricao} onChange={props.handleChange} />
        <div className='baixo'>
            <div className='teste'>
                <i className='fa fa-calendar'></i>
                <input className='data' type='date' value={props.date} onChange={props.handleChangeDate} />
            </div>
            <div>
                <i className='fa fa-exclamation-circle'></i>
                <select required className='prioridade' value={props.prioridade} onChange={props.handleChangePriority}>
                    <option value='Nula' hidden>Prioridade</option>
                    <option value='Nula'>Nula</option>
                    <option value='Baixa'>Baixa</option>
                    <option value='Média'>Média</option>
                    <option value='Alta'>Alta</option>
                </select>
            </div>
            <input className='projeto teste' placeholder='Projeto'  />
            <input className='botao' type='submit' value='Adicionar' />
        </div>
    </form>
)
// <option value='Nula' disabled selected hidden>Prioridade</option>