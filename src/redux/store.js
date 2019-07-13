import { createStore } from 'redux'
import { ADD_TO_CART, REMOVE_FROM_CART } from './action';

const initialStore = {
    cart: []
}

const rootReducer = (globalState = initialStore, action) => {

    switch (action.type) {

        case ADD_TO_CART: 
            if (globalState.cart.find(a => a === action.data)) return globalState
            return {
                ...globalState,
                cart: globalState.cart.concat(action.data)
            }
            break
        case REMOVE_FROM_CART:
            if (globalState.cart.find(a => a === action.data)) {
                return {
                    ...globalState,
                    cart: globalState.cart.filter(a => a !== action.data)
                }
            }
            break

        default: return globalState    
    }
} 

export default createStore(rootReducer)