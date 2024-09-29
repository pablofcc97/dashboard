import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: true }

const sidebarSlice = createSlice({
  name: 'showSidebar',
  initialState,
  reducers: {
    toggle(state) {
        state.value = !state.value;
    }
  },
})

export const { toggle } = sidebarSlice.actions
export default sidebarSlice.reducer