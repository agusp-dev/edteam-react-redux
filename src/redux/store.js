import { createStore } from 'redux'

const initialStore = {
    cart: []
}

const rootReducer = (globalState = initialStore, action) => {
    return globalState
} 

export default createStore(rootReducer)