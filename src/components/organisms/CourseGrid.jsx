import React from 'react'
import CourseCard from '../molecules/CourseCard'
import WithLoader from '../hoc/WithLoader'

const CourseGrid = ({courses}) => {
    return <div className='ed-grid m-grid-4'>
            { 
                courses.map( c => 
                    <CourseCard 
                        key = {c.id}
                        id = {c.id}
                        title = {c.title}
                        image = {c.image}
                        price = {c.price}
                        teacher = {c.teacher}
                    />    
                )
            }
            </div>
}

export default WithLoader('courses', CourseGrid)