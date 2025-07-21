import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")) : null
  },
  reducers: {
    userinfo: (State,action) => {
      console.log(State.value);
      console.log(action.payload);
      State.value = action.payload
      
      
    },

  }
})

// Action creators are generated for each case reducer function
export const { userinfo } = userSlice.actions

export default userSlice.reducer