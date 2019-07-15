import { ADD_TO_CART, REMOVE_FROM_CART, GET_COURSE_LIST } from "./action";
import axios from 'axios'

const addToCart = id => ({
    type: ADD_TO_CART,
    data: id
})

const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    data: id
})

const getCourseList = () => dispatch => {
    axios.get('http://demo2943031.mockable.io/courses')
        .then(response => {
            return dispatch ({
                type: GET_COURSE_LIST,
                data: response.data
            })    
        })
}

export {
    addToCart,
    removeFromCart,
    getCourseList
}