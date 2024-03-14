import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyles from "./components/globalStyles/globalStyles"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
