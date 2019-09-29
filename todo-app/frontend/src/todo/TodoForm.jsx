import React, { Component } from 'react'
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
// import PageHeader from '../template/PageHeader'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// import Grid from '../template/grid'
// import IconButton from '../template/iconButton'
// import { add, changeDescription, search, clear } from './todoActions'

export default props => {

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
                    onChange={props.handleChange}
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
    // render(){
    //     return (
    //         <div>
    //             <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
    //         </div>
    //     )
    // }

    // constructor(props) {
    //     super(props)
    //     this.keyHandler = this.keyHandler.bind(this)
    // }

    // componentWillMount() {
    //     this.props.search()
    // }

    // keyHandler(e) {
    //     const { add, clear, search, description } = this.props
    //     if (e.key === 'Enter') {
    //         e.shiftKey ? search() : add(description)
    //     } else if (e.key === 'Escape') {
    //         clear()
    //     }
    // }

    // render() {
    //     const { add, search, description } = this.props
    //     return (
    //         <div role='form' className='todoForm'>
    //             <Grid cols='12 9 10'>
    //                 <input id='description' className='form-control'
    //                     placeholder='Adicione uma tarefa'
    //                     onChange={this.props.changeDescription}
    //                     onKeyUp={this.keyHandler}
    //                     value={this.props.description}></input>
    //             </Grid>
    //             <Grid cols='12 3 2'>
    //                 <IconButton style='primary' icon='plus'
    //                     onClick={() => add(description)}></IconButton>
    //                 <IconButton style='info' icon='search'
    //                     onClick={search}></IconButton>
    //                 <IconButton style='default' icon='close'
    //                     onClick={this.props.clear}></IconButton>
    //             </Grid>
    //         </div>
    //     )
    // }
//}

// const mapStateToProps = state => ({description: state.todo.description})
// const mapDispatchToProps = dispatch => 
//     bindActionCreators({ add, changeDescription, search, clear }, dispatch)
// export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)