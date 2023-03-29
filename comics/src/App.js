import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Comics from "./components/Comics";

function App() {
  return (
    <Provider store={store}>
      <Comics />
    </Provider>
  );
}

export default App;