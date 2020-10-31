import React from "react";
import { Provider } from "react-redux";
import { store } from "../../utils/reducer";
import Router from "../Router";
import { useAppSync } from "../../utils/hooks";

/**
 * @name App
 * @description Building application with redux provider
 */
const App = () => {
  useAppSync();

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
