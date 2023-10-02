import React from "react";

import { StyleSheet, Dimensions, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Block, Text, Button } from "expo-ui-kit";
import { connect } from "react-redux";
import { evaluate } from "mathjs";

import { add_line } from "../redux/reducers/history";
const { width } = Dimensions.get("screen");
const buttonWidth = width / 4;

import { buttons } from "../tools/tools";

class Calculator extends React.Component {
  state = {
    value: "",
    result: "",
    history: "",
  };

  on_long_press = (type, value) =>
    this.setState((state) => {
      switch (type) {
        case "cancel":
          return { value: "" };
      }
    });

  on_press = (type, value) =>
    this.setState((state) => {
      const { dispatch, count_history } = this.props;
      switch (type) {
        case "numeric":
          return { value: state.value + value };
        case "cancel":
          return { value: state.value.substring(0, state.value.length - 1) };
        case "operator":
          if (state.value.length !== 0) return { value: state.value + " " + value + " " };
          else return { ...state };
        case "sqrt":
          try {
            const v = parseInt(state.value);
            console.log(v);
            if (v > 0) {
              let result = evaluate(`sqrt(${v})`);
              dispatch(add_line({ value: `sqrt(${v}) = ${result}`, id: count_history + 1 }));
              return { history: `sqrt(${v})`, value: "", result };
            } else return { history: state.value, value: "", result: "Erreur: valeur négative" };
          } catch (error) {
            return { history: state.value, value: "", result: error };
          }
        case "log":
          try {
            const v = parseInt(state.value);
            console.log(v);
            if (v > 0) {
              let result = evaluate(`log(${v}, 10)`);
              dispatch(add_line({ value: `log(${v}, 10) = ${result}`, id: count_history + 1 }));
              return { history: `log(${v}, 10)`, value: "", result };
            } else return { history: state.value, value: "", result: "Erreur: valeur négative" };
          } catch (error) {
            return { history: state.value, value: "", result: error };
          }
        case "point":
          // TODO Problème si on calcule avec au moins 2 float
          if (state.value.length === 0) return { value: "0." };
          if (state.value.search(/\./) !== -1) return { ...state };
          const v = parseInt(state.value[state.value.length - 1]);
          if (typeof v === "number") return { value: state.value + "." };
          else return { ...state };
        case "equal":
          if (state.value.length !== 0) {
            let result = state.value;
            result = result.replace("×", "*");
            result = result.replace("÷", "/");
            try {
              result = evaluate(result);
              dispatch(add_line({ value: `${state.value} = ${result}`, id: count_history + 1 }));
            } catch (error) {
              result = error.message;
            }
            return { history: state.value, value: "", result };
          } else return { ...state };
      }
    });

  render_button = (item, index) => {
    const { value, color, button, type, flex } = item;
    return (
      <Button
        onPress={() => this.on_press(type, value)}
        onLongPress={() => this.on_long_press(type, value)}
        key={index}
        flex={flex}
        color={button}
        style={[styles.button]}>
        <Text color={color} bold h2>
          {value}
        </Text>
      </Button>
    );
  };

  render_button2 = ({ item, index }) => {
    const { value, color, button, type, flex } = item;
    return (
      <Button
        onPress={() => this.on_press(type, value)}
        onLongPress={() => this.on_long_press(type, value)}
        key={index}
        flex={flex}
        color={button}
        style={[styles.button]}>
        <Text color={color} bold h2>
          {value}
        </Text>
      </Button>
    );
  };

  render_line = ({ item, index }) => (
    <Block row space="between">
      {item.map(this.render_button)}
    </Block>
  );

  render_line2 = ({ item, index }) => (
    <Block flex>
      <FlatList horizontal={true} key={index} data={item} renderItem={this.render_button2} />
    </Block>
  );

  render() {
    const { history, value, result } = this.state;
    return (
      <Block safe flex color="white">
        <Block flex borderWidth={0.3}>
          <Block flex color={"#AAFC4C"}>
            <Block row space={"between"}>
              {result !== "" && history !== "" && (
                <>
                  <Text h2 bold>
                    {history} =
                  </Text>
                  <Text h2 bold>
                    {result}
                  </Text>
                </>
              )}
            </Block>
          </Block>
          <Block flex middle>
            <Text h1 bold right>
              {value}
            </Text>
          </Block>
        </Block>
        <Block flex={3} margin>
          <FlatList data={buttons} renderItem={this.render_line} />
        </Block>
        <StatusBar style="light" animated={true} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: Math.floor(buttonWidth - 15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
});

const mapStateToProps = (state) => {
  const { history } = state;
  return {
    count_history: history.value.length,
  };
};

export default connect(mapStateToProps)(Calculator);
