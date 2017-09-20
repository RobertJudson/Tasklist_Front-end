import React, {Component} from 'react'
import axios from 'axios'

const URL = 'http://localhost:3003/projects'

export default class selectProjects extends Component {
    constructor(props){
        super(props)
        this.state = {titleProj: '', list: []}
        this.handleProjects()
    }
    
    handleProjects() {
        axios.get(`${URL}?sort=titleProj`)
            .then(resp => this.setState({...this.state, list: resp.data}))
    }

    render(){
        
        const renderProjetos = () => {
            const list = this.state.list
            //console.log(list)
            return list.map(projetos => (
                <option key={projetos._id}>{projetos.titleProj}</option>  
            ))
        }

        return (
            <div className='projeto'>
                <select>
                    {renderProjetos()}
                </select>
            </div>
        )
    }

}