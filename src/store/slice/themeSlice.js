import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 'dark' }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle(state) {
        state.value == 'dark' ? state.value='light' :state.value='dark'
    }
  },
})

export const { toggle } = themeSlice.actions
export default themeSlice.reducer