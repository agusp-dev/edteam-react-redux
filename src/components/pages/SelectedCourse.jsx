import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useCourse from '../customHooks/UseCourse';

const SelectedCourse = ({match}) => {

    const [comment, setComment] = useState('Sin comentarios')
    const selectedCourse = useCourse(match.params.id)

    const myComment = (e) => {
        setComment(e.target.value)
    }

    return (
        <div className='ed-grid m-grid-3'>
            {
                selectedCourse ? (
                    <div className='ed-grid'>
                        <div>
                            <h1 className='m-cols-3'>{selectedCourse.title}</h1>
                            <img className='m-cols-1' src={selectedCourse.image} alt={selectedCourse.title}/>
                            <p className='m-cols-2'>Profesor: {selectedCourse.teacher}</p>
                        </div>
                        <div className='ed-grid'>
                            <h2>Escribe tu comentario</h2>
                            <input type="text" placeholder='Escribe...' onChange={myComment.bind(this)} />
                            <p>{comment}</p>
                        </div>
                    </div>
                ) : <h1>Curso inexistente!</h1>
            }
        </div>
    )
}

export default SelectedCourse