import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: true }

const sidebarSlice = createSlice({
  name: 'showSidebar',
  initialState,
  reducers: {
    toggle(state) {
        state.value = !state.value;
    },
    show(state){
      state.value = true;
    },
    hide(state){
      state.value = false;
    },
    custom(state, action){
      state.value=action.payload
    }
  },
})

export const { toggle, hide, custom } = sidebarSlice.actions
export default sidebarSlice.reducer