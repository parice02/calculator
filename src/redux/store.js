import {configureStore} from "@reduxjs/toolkit";
import {persistCombineReducers} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

import history from "./reducers/history";

const persist_config = {
  key: "root",
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(persist_config, {
  history: history,
});

export default configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
