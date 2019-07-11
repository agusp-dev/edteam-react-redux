import React, {Component} from 'react'
import axios from 'axios';
import CourseGrid from '../organisms/CourseGrid';

class Courses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('http://demo2943031.mockable.io/courses')
        .then(resp => (
            this.setState({
                courses: resp.data
            })
        ))
    }

    render() {
        return <CourseGrid courses={this.state.courses} />
    }
}

export default Courses