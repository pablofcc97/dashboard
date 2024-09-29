import { configureStore } from '@reduxjs/toolkit'

//import rootReducer from './reducers'
import sidebarReducer from './slice'

const store = configureStore({ 
    reducer: {
        sideBar: sidebarReducer
    } 
})

export default store