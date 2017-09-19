import React from 'react'

export default props => (
    <section className="home">
        <div className="bgHomeImg"></div>
        <div className="content">
            <article className="textos">
                <h1>ORGANIZE SUAS TAREFAS<br/>CONTROLE SEU DIA</h1>
                <h2>Planeje suas atividades e seus projetos, obtenha mais tempo e torne-se mais produtivo utilizando os eficientes serviços da Tasklist</h2>
                <div><h3>Crie sua conta gratuitamente</h3><i className='fa fa-angle-double-right'></i></div>
            </article>
            <article className="createAcount">
                <h4>Cadastre-se na Tasklist:</h4>
                <form onSubmit="">
                    <input placeholder="Seu nome"/>
                    <input placeholder="Seu e-mail"/>
                    <input placeholder="Sua senha"/>
                    <input className='botao' type='submit' value='Criar minha conta' />
                </form>
            </article>
        </div>
    </section>
)
