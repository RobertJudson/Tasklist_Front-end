import React, {Component} from 'react'
import axios from 'axios'

import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoMenu from './todoMenu'

const URL = 'http://localhost:3003/api/tarefas' // http://localhost:3003/api/tarefas // https://prpi.herokuapp.com/api/tarefas

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {descricao: '', date: '', prioridade: 'Nula', list: []}

        this.refresh()
    }


    handleChange = (event) => {
        this.setState({...this.state, descricao: event.target.value} )
    }

    handleChangeD = (event) => {
        this.setState({...this.state, date: event.target.value})
    }

    handleChangeP = (event) => {
        this.setState({...this.state, prioridade: event.target.value} )
    }

    refreshAdd() {
        axios.get(`${URL}?sort=-createdAt`) // ?sort=-createdAt
            .then(resp => this.setState({...this.state, list: resp.data}))
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`) // ?sort=-createdAt
            .then(resp => this.setState({...this.state, list: resp.data}))
    }

    handleAdd = () => {
        //console.log(this.state.description)
        const descricao = this.state.descricao
        const date = this.state.date
        const prioridade = this.state.prioridade
        axios.post(URL, {descricao, date, prioridade})
            .then(qqrNome => this.refreshAdd())
    }

    handleRemove = (todo) => {
        axios.delete(`${URL}/${todo._id}`)
            .then(qqrNome => this.refresh())
    }

    handleDone = (todo) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(qqrNome => this.refresh())
    }

    handlePending = (todo) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(qqrNome => this.refresh())
    }


    render(){
        return(
            <section className='conteudoTarefas'>
                <article className='esquerda'>
                    <TodoMenu />
                </article>
                <article className='direita'>
                    <TodoForm handleAdd={this.handleAdd} handleChange={this.handleChange} descricao={this.state.descricao} handleChangeD={this.handleChangeD} date={this.state.date} handleChangeP={this.handleChangeP} prioridade={this.state.prioridade} />
                    <TodoList list={this.state.list} handleRemove={this.handleRemove} handleDone={this.handleDone} handlePending={this.handlePending} />
                </article>
            </section>
        )
    }
}
