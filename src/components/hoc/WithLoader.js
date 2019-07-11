import React, {Component} from 'react'

const WithLoader = (propValue, WrappedComponent) => {
    return class WithLoader extends Component {

        constructor(props) {
            super(props)
        }

        render() {
            return this.props[propValue].length === 0
            ? <div className='center'>Cargando...</div>
            : <WrappedComponent {...this.props} />
        }
    }
}

export default WithLoader