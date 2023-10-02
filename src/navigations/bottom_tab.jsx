import React from "react";

import { Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";

import CalculatorScreen from "../screens/calculator";
import HistoryScreen from "../screens/history";
import { delete_all } from "../redux/reducers/history";

const Tab = createBottomTabNavigator();

class MyTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName={"Calculatrice"}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#000000",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#FFFFFF",
        }}>
        <Tab.Screen
          name="Calculatrice"
          component={CalculatorScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="calculator" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Historique"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="history" size={size} color={color} />
            ),
            headerRight: ({}) => (
              <Ionicons
                name="trash-bin"
                color={"red"}
                size={20}
                style={{ margin: 10 }}
                onPress={() => {
                  Alert.alert(
                    "Suppression de l'historique",
                    "Êtes-vous sûr de vouloir vider votre historique de calculs ?",
                    [
                      { text: "Annuler", style: "cancel" },
                      {
                        text: "Vider",
                        style: "destructive",
                        onPress: () => this.props.dispatch(delete_all()),
                      },
                    ],
                  );
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  const { history } = state;
  return {
    count: history.value.count,
  };
};

export default connect(mapStateToProps)(MyTabs);
