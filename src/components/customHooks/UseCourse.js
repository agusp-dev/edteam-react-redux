import { useState, useEffect } from 'react'
import axios from 'axios'

const useCourse = (id) => {

    const [course, setCourse] = useState({})

    useEffect(() => {
        axios.get(`http://demo2943031.mockable.io/courses/${id}`)
        .then(resp => setCourse(resp.data))
    }, [])

    return course
}

export default useCourse