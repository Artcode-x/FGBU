import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  flag: false,
  pageNumber: 1,
  allData: [],
  totalPageCount: {},
  currentPageData: [],
  selectPostData: [],
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
    allDataUpdate: (state, action) => {
      state.allData = action.payload
    },
    setTotalPageCount: (state, action) => {
      state.totalPageCount = action.payload
    },
    setCurrentPageData: (state) => {
      const currentItems = state.pageNumber > 1 ? (state.pageNumber - 1) * 10 : state.pageNumber - 1
      state.currentPageData = state.allData.slice(currentItems, 10 * state.pageNumber)
    },
    setSelectPostData: (state, action) => {
      state.selectPostData = action.payload
    },
  },
})

export const { flagUpdate, pageNumberUpdate, allDataUpdate, setTotalPageCount, setCurrentPageData, setSelectPostData } =
  reducers.actions
export default reducers
