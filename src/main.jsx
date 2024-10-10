import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/app";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { reducer } from "./redux/reducer";

const store = legacy_createStore(reducer, );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
