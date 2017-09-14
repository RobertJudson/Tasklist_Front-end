import React from 'react'

export default props => (
    <section className="home">
        <div className="bgBlackHome"/>
        <article className="textos">
            <h1>ORGANIZE SUAS TAREFAS<br/>CONTROLE SEU DIA</h1>
            <h2>Planeje suas atividades e seus projetos, obtenha mais tempo e torne-se mais produtivo utilizando os eficientes serviços da Tasklist</h2>
            <div><h3>Crie sua conta gratuitamente</h3><i className='fa fa-angle-double-right'></i></div>
        </article>
        <article className="createAcount">
            <h4>Cadastre-se através de outra conta</h4>
            <form>
                <input className="google"/>
                <input className="facebook"/>
            </form>
            <span>ou</span>
            <form onSubmit="">
                <input placeholder="Seu nome"/>
                <input placeholder="Seu e-mail"/>
                <input placeholder="Sua senha"/>
                <input className='botao' type='submit' value='Adicionar' />
            </form>
        </article>
    </section>
)
