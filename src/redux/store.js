import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ADD_TO_CART, REMOVE_FROM_CART, GET_COURSE_LIST } from './action';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const initialCarts = {
    cart: []
}

const initialCourses = {
    courses: []
}

const cartReducer = (state = initialCarts, action) => {

    switch (action.type) {

        case ADD_TO_CART: 
            if (state.cart.find(a => a === action.data)) return state
            return {
                ...state,
                cart: state.cart.concat(action.data)
            }
            break
        case REMOVE_FROM_CART:
            if (state.cart.find(a => a === action.data)) {
                return {
                    ...state,
                    cart: state.cart.filter(a => a !== action.data)
                }
            }
            break

        default: return state  
    }
} 

const coursesReducer = (state = initialCourses, action) => {

    if (action.type === GET_COURSE_LIST) {
        return {
            ...state,
            courses: action.data
        }
    }

    return state
}

//ATENCION: a modo de ejemplo, se indica que el applyMiddleware sea monitoreado por la redux dev tools, por eso se la encierra.
export default createStore(combineReducers({cartReducer, coursesReducer}), composeWithDevTools(applyMiddleware(thunk)))