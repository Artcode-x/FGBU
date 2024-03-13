import { configureStore } from "@reduxjs/toolkit"
import reducers from "./reducersSlice"

const store = configureStore({
  reducer: {
    store: reducers.reducer,
  },
})

export default store
