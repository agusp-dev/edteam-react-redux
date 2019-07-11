import React, {Component} from 'react'
import UserGrid from '../organisms/UsersGrid'
import axios from 'axios'

class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://demo2943031.mockable.io/users')
        .then(resp => (
            this.setState({
                users: resp.data
            })
        ))
    }

    render() {
        return <UserGrid users={this.state.users}/>
    }
}

export default Users