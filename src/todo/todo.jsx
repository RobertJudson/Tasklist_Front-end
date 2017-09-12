import React, {Component} from 'react'
import axios from 'axios'

import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoMenu from './todoMenu'

const URL = 'http://localhost:3001/tasks' // http://localhost:3003/api/tarefas // https://prpi.herokuapp.com/api/tarefas

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', date: '', priority: 'Nula', project: '', list: []}

        this.refresh()
    }


    handleChange = (event) => {
        this.setState({...this.state, description: event.target.value} )
    }

    handleChangeDate = (event) => {
        this.setState({...this.state, date: event.target.value})
    }

    handleChangePriority = (event) => {
        this.setState({...this.state, priority: event.target.value} )
    }

    refreshAdd(description, date, priority) {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description, date, priority, list: resp.data}))
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, list: resp.data}))
    }

    handleAdd = () => {
        const description = this.state.description
        const date = this.state.date
        const priority = this.state.priority
        axios.post(URL, {description, date, priority})
            .then(qqrNome => this.refreshAdd('', '', 'Nula'))
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

                </article>
                <article className='direita'>
                    <TodoForm handleAdd={this.handleAdd} handleChange={this.handleChange} description={this.state.description} handleChangeDate={this.handleChangeDate} date={this.state.date} handleChangePriority={this.handleChangePriority} priority={this.state.priority} project={this.state.project} />
                    <TodoList list={this.state.list} handleRemove={this.handleRemove} handleDone={this.handleDone} handlePending={this.handlePending}  />
                </article>
            </section>
        )
    }
}
