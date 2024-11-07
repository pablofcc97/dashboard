import { configureStore } from '@reduxjs/toolkit'

//import rootReducer from './reducers'
import sidebarReducer from './slice/sidebarSlice'
import themeReducer from './slice/themeSlice'

const store = configureStore({ 
    reducer: {
        sideBar: sidebarReducer
    } 
})

export default store