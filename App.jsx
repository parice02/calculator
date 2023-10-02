import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

import store from "./src/redux/store";
import AppNavigation from "./src/navigations/bottom_tab";

SplashScreen.preventAutoHideAsync();
export default class App extends React.Component {
  state = { loading: true };

  async componentDidMount() {
    try {
    } catch (e) {
      console.warn(e);
    }
    this.setState({ loading: false });
    await SplashScreen.hideAsync();
  }
  render() {
    if (this.state.loading) {
      return <></>;
    }

    const persistor = persistStore(store);
    //persistor.purge();
    return (
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </PersistGate>
      </ReduxProvider>
    );
  }
}
