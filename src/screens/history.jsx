import React from "react";

import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { Block, Text } from "expo-ui-kit";
import { connect } from "react-redux";

import Card from "../components/card";

class History extends React.Component {
  render_item = ({ item, index }) => <Card result={item} key={index} />;

  render_divider = () => <Block borderWidth={0.4} />;

  render_footer_header = () => <Block margin />;

  on_refreshing = () => {};

  render_empty = () => (
    <Block middle center>
      <Text>Votre historique est vide</Text>
    </Block>
  );

  render() {
    const { history = [] } = this.props;
    return (
      <Block safe flex white>
        <FlatList
          data={history}
          renderItem={this.render_item}
          ListEmptyComponent={this.render_empty}
          ItemSeparatorComponent={this.render_divider}
          ListFooterComponent={this.render_footer_header}
          ListHeaderComponent={this.render_footer_header}
          keyExtractor={(_, index) => `${index}`}
          onRefresh={this.on_refreshing}
          refreshing={false}
          progressViewOffset={10}
          legacyImplementation={true}
        />
        <StatusBar style="light" animated={true} />
      </Block>
    );
  }
}

const mapStateToProps = (state) => {
  const { history } = state;
  return {
    history: history.value,
  };
};

export default connect(mapStateToProps)(History);
