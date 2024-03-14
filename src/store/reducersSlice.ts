import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  flag: false,
  pageNumber: 1,
}

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    flagUpdate: (state, action) => {
      state.flag = action.payload
    },

    pageNumberUpdate: (state, action) => {
      state.pageNumber = action.payload
    },
  },
})

export const { flagUpdate, pageNumberUpdate } = reducers.actions
export default reducers
