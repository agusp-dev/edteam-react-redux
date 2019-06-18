import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: ''
        }

        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
    }

    changeName(value) {
        this.setState({
            name: value
        });
    }

    changeEmail(value) {
        this.setState({
            email: value
        });
    }

    render() {
        return (
            <div className='ed-grid'>
                <h1>Formulario</h1>
                <form>
                    <div className='ed-grid m-grid-2'>
                        <div className='form__item'>
                            <label>Nombre</label>
                            <input type='text' 
                                onChange={
                                    e => this.changeName(e.target.value)
                                }>
                            </input>
                        </div> 
                        <div className='form__item'>
                            <label>Email</label>
                            <input type='email' 
                                onChange={
                                    e => this.changeEmail(e.target.value)
                                }>
                            </input>
                        </div>  
                    </div>
                </form>
                <div className='center'>
                    <h2>{'Hola ' + this.state.name}</h2>
                    <span>{'Tu email es: ' + this.state.email}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevStates) {
        console.log(prevProps)
        console.log(prevStates)
        console.log('---------------------------')
    }
}

export default Form;