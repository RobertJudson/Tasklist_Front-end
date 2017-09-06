import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button className='botaoLista' type='button' onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)

/*
    <button className={'btn btn-' + props.style} onClick={props.onClick}>
        <i className={'fa fa-' + props.icon}></i>
    </button>
*/
