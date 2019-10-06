import React, { Component } from 'react'
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import {connect} from 'react-redux'

import {bindActionCreator, bindActionCreators} from 'redux'

import {changeDescription} from './todoActions'


const TodoForm = props => {

    const keyHandler = (e) => {
        if (e.key == 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if (e.key == 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.changeDescription}
                    value={props.description}
                    onKeyUp={keyHandler}
                >
                </input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton className='btn btn-primary' tyle='primary' icon='plus' onClick={props.handleAdd}>
                </IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}>
                </IconButton>
                <IconButton style='default' icon='close' onClick={props.handleClear}>
                </IconButton>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)